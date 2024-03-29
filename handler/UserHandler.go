package handler

import (
	"AmarShop/handler/param"
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type IUserHandler interface {
	IHandler
}

type UserHandler struct {
	userService services.IUserService
}

//NewUserHandler is the constructor of UserHandler struct
func NewUserHandler(userService services.IUserService) IUserHandler {
	return &UserHandler{
		userService: userService,
	}
}

func (h *UserHandler) Handle(rout chi.Router) {
	rout.Route("/{id}", func(router chi.Router) {
		router.Get("/", h.getUserByID)
		router.Put("/", h.updateUser)
		router.Delete("/", h.deleteUser)
	})

	rout.Get("/get", h.getAllUser)
	rout.Post("/post", h.createUser)
	rout.Put("/update", h.updateUser)
	rout.Delete("/delete", h.deleteUser)
}

func (h *UserHandler) getAllUser(w http.ResponseWriter, r *http.Request) {
	d, e := h.userService.GetAll()
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *UserHandler) getUserByID(w http.ResponseWriter, r *http.Request) {
	id := param.UInt(r, "id")
	//userService := services.NewUserService()
	d, e := h.userService.GetUserByID(id)
	if e != nil {
		w.WriteHeader(200)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"name" : "Not found"}`))
		return
	}
	w.WriteHeader(200)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
	w.Write([]byte("Name : " + d.NAME))
	fmt.Println(d)

}

func (h *UserHandler) createUser(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	user := models.User{}
	err := json.NewDecoder(r.Body).Decode(&user)
	fmt.Println(user)
	if err != nil {
		fmt.Println(user)
		/*
			w.WriteHeader(400)
			w.Header().Add("content-type", "application/json")
			w.Write([]byte(`{"message" : "Bad request error"}`))
			return
		*/
		panic(err)
	}
	fmt.Println(user)
	d, e1, e2 := h.userService.CreateUser(&user)
	if e1 != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Bad request error."}`))
		return
	}
	if e2 == nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "User already exists."}`))
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Header().Add("content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *UserHandler) updateUser(w http.ResponseWriter, r *http.Request) {
	id := param.UInt(r, "id")
	user := models.User{}
	err := json.NewDecoder(r.Body).Decode(&user)
	fmt.Println(user)
	fmt.Println("naimssda")
	if err != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Bad request error"}`))
	}
	users, e := h.userService.UpdateUser(&user, id)
	if e != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Bad request error"}`))
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	_ = json.NewEncoder(w).Encode(users)
}

//Delete :
func (h *UserHandler) deleteUser(w http.ResponseWriter, r *http.Request) {
	id := param.UInt(r, "id")
	e := h.userService.DeleteUser(id)
	if e != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not fonud"}`))
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

/*
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
*/
