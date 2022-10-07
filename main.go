package main

import (
	"AmarShop/system"
)

func main() {

	system.NewSystem()

	/*
		port := ":8080"
		router := chi.NewRouter()
		//r2 := mux.NewRouter()
		//rout for user
		userHandler := handler.NewUserHandler()
		router.Route("/users", userHandler.Handle)
		//rout for login
		loginHandler := handler.NewLoginHandler()
		router.Route("/login", loginHandler.Handle)
		//rout for product
		productHandler := handler.NewProductHandler()
		router.Route("/product", productHandler.Handle)
		/*
			up := handler.NewUpload()
			router.Route("/up", up.UHandler)

		//r2.HandleFunc("/api/upload", handler.UploadFile).Methods("POST")

		//rout for home
		homeHandler := handler.NewHomeHandler()
		router.Route("/home", homeHandler.Handle)
		//rout for orders
		orderHandler := handler.NewOrderHandler()
		router.Route("/order", orderHandler.Handle)
		//cart Handler
		cartHandler := handler.NewCartHandler()
		router.Route("/cart", cartHandler.Handle)
		fmt.Println("Creating a server on port ", port)
		//upload handler
		/*	uploadHandler := handler.NewFileHandler()
			router.Route("/upload", uploadHandler.UploadHandler)

		config := config.NewDBConfig()
		connection := conn.ConnectDB(config)
		connection.Migration()
		defer connection.Close()
		http.ListenAndServe(port, router)
	*/
}
