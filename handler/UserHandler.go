package handler

import (
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
