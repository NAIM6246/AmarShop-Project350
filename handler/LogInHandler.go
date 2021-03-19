package handler

import (
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type ILoginHandler interface {
	IHandler
}

type LoginHandler struct {
	loginService services.ILoginService
}

func NewLoginHandler(loginService services.ILoginService) ILoginHandler {
	return &LoginHandler{
		loginService: loginService,
	}
}

//handle
func (h *LoginHandler) Handle(rout chi.Router) {
	rout.Post("/", h.logIn)
}

func (h *LoginHandler) logIn(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	//user := param.String(r, "name")
	//fmt.Println(user)
	u2 := models.Login{}
	err := json.NewDecoder(r.Body).Decode(&u2)
	if err != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Invalid User"}`))
		return
	}

	fmt.Println(&u2)
	d, e := h.loginService.LogIn(u2.MOBILENUMBER)
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Invalid User"}`))
		return
	}
	if d.PASSWORD != u2.PASSWORD {
		fmt.Println(d.PASSWORD)
		fmt.Println("wrong password")
		fmt.Fprintf(w, "Wrong Password")
		fmt.Println(u2.PASSWORD)
		return
	}
	fmt.Println("Login succesfull")
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	_ = json.NewEncoder(w).Encode(d)
}

//
func EnableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
