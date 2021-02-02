package handler

import (
	"AmarShop/handler/param"
	"AmarShop/services"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type UserHandler struct {
}

//NewUserHandler is the constructor of UserHandler struct
func NewUserHandler() *UserHandler {
	return &UserHandler{}
}

func (h *UserHandler) Handle(rout chi.Router) {
	rout.Route("/{id}", func(router chi.Router) {
		router.Get("/", h.getUserByID)
	})
	rout.Get("/get", h.getUser)
	rout.Post("/post", h.createUser)
	rout.Put("/update", h.updateUser)
	rout.Delete("/delete", h.deleteUser)
}

func (h *UserHandler) getUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	w.Write([]byte(`{"message" : "data fetch"}`))
}

func (h *UserHandler) getUserByID(w http.ResponseWriter, r *http.Request) {
	id := param.UInt(r, "id")
	userService := services.NewUserService()
	d, e := userService.GetUserByID(id)
	if e != nil {
		w.WriteHeader(200)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"name" : "Not found"}`))
		return
	}
	w.WriteHeader(200)
	w.Header().Add("Content-type", "application/json")
	w.Write([]byte("Name : " + d.NAME))
	fmt.Println(d)

}

func (h *UserHandler) createUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(201)
	w.Write([]byte(`{"message" : "data created"}`))
}

func (h *UserHandler) updateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	w.Write([]byte(`{"message" : "data updated"}`))
}

func (h *UserHandler) deleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(204)
}
