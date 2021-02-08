package main

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/handler"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

func main() {
	port := ":8080"
	router := chi.NewRouter()
	userHandler := handler.NewUserHandler()
	loginHandler := handler.NewLoginHandler()
	router.Route("/users", userHandler.Handle)
	router.Route("/login", loginHandler.Handler)
	fmt.Println("Creating a server on port ", port)

	config := config.NewDBConfig()
	connection := conn.ConnectDB(config)
	connection.Migration()
	defer connection.Close()
	http.ListenAndServe(port, router)
}
