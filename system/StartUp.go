package system

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/handler"
	"AmarShop/repository"
	"AmarShop/services"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"go.uber.org/dig"
)

const port = ":8080"

//
func buildContainer() *dig.Container {
	container := dig.New()

	//DB config
	container.Provide(config.NewDBConfig)
	container.Provide(conn.ConnectDB)

	//User
	container.Provide(services.NewUserService)
	container.Provide(repository.NewUserRepository)

	//Product
	container.Provide(services.NewProductService)
	container.Provide(repository.NewProductRepository)

	//Order
	container.Provide(services.NewOrderService)
	container.Provide(repository.NewOrderRepository)

	//login
	container.Provide(services.NewLoginService)
	container.Provide(repository.NewLoginRepository)

	//Cart
	container.Provide(services.NewCartService)
	container.Provide(repository.NewCartRepository)

	//home
	container.Provide(services.NewHomeService)
	container.Provide(repository.NewHomeRepository)

	//handlers
	container.Provide(handler.NewUserHandler)
	container.Provide(handler.NewHomeHandler)
	container.Provide(handler.NewLoginHandler)
	container.Provide(handler.NewProductHandler)
	container.Provide(handler.NewOrderHandler)
	container.Provide(handler.NewCartHandler)

	container.Provide(NewServer)
	return container
}

//
type System struct {
}

func NewSystem() {
	conatainer := buildContainer()

	err := conatainer.Invoke(func(server *Server) {
		server.run()
	})
	if err != nil {
		panic(err)
	}
}

type Server struct {
	userHandler    handler.IUserHandler
	productHandler handler.IProductHandler
	loginHandler   handler.ILoginHandler
	cartHandler    handler.ICartHandler
	orderHandler   handler.IOrderHandler
	homHandler     handler.IHomeHandler
	router         *chi.Mux
	dbContext      *conn.DB
}

func NewServer(
	userHandler handler.IUserHandler,
	productHandler handler.IProductHandler,
	loginHandler handler.ILoginHandler,
	cartHandler handler.ICartHandler,
	orderHandler handler.IOrderHandler,
	homHandler handler.IHomeHandler,

	dbContext *conn.DB) *Server {

	return &Server{
		userHandler:    userHandler,
		productHandler: productHandler,
		loginHandler:   loginHandler,
		cartHandler:    cartHandler,
		orderHandler:   orderHandler,
		homHandler:     homHandler,
		router:         chi.NewRouter(),
		dbContext:      dbContext,
	}
}

func (s *Server) run() {
	s.setMiddlewares()
	s.mapHandlers()
	defer s.dispose()
	fmt.Println("Serving on port ", port)
	http.ListenAndServe(port, s.router)
}

func (s *Server) setMiddlewares() {
	s.dbContext.Migration()
}

func (s *Server) mapHandlers() {
	s.router.Route("/users", s.userHandler.Handle)
	s.router.Route("/product", s.productHandler.Handle)
	s.router.Route("/login", s.loginHandler.Handle)
	s.router.Route("/home", s.homHandler.Handle)
	s.router.Route("/cart", s.cartHandler.Handle)
	s.router.Route("/order", s.orderHandler.Handle)
}

func (s *Server) dispose() {
	s.dbContext.Close()
}
