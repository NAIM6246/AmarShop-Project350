package main

import (
	"AmarShop/handler"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

func main() {
	port := ":3000"
	router := chi.NewRouter()
	userHandler := handler.NewUserHandler()
	router.Route("/users", userHandler.Handle)
	http.ListenAndServe(port, router)
	fmt.Println("Creating a server on port ", port)
}
