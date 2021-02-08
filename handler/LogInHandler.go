package handler

import (
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type LoginHandler struct {
	loginService *services.LoginService
}

func NewLoginHandler() *LoginHandler {
	return &LoginHandler{
		loginService: services.NewLoginService(),
	}
}

//handle
func (h *LoginHandler) Handler(rout chi.Router) {
	rout.Post("/", h.logIn)
	//creating login
	/*
		rout.Route("/{name}", func(router chi.Router) {
			router.Get("/", h.logIn)
			router.Post("/", h.logIn2)
		})
	*/
	//end of login
}

/*
func (h *LoginHandler) logIn2(w http.ResponseWriter, r *http.Request) {
	user := param.String(r, "name")
	fmt.Println(user)
	fmt.Println("handler")
	d, e := h.loginService.LogIn(user)
	if e != nil {
		w.WriteHeader(200)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Invalid User"}`))
		return
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	_ = json.NewEncoder(w).Encode(d)
}
*/

func (h *LoginHandler) logIn(w http.ResponseWriter, r *http.Request) {
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

	_, er := json.Marshal(&u2)

	//fmt.Println(&u2)
	//fmt.Println(user)
	if er != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Invalid User"}`))
		return
	}
	//fmt.Println(&u2)
	d, e := h.loginService.LogIn(u2.MOBILENUMBER)
	if e != nil {
		w.WriteHeader(200)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Invalid User"}`))
		return
	}
	if d.PASSWORD != u2.PASSWORD {
		fmt.Println(d.PASSWORD)
		fmt.Println("wrong password")
		fmt.Println(u2.PASSWORD)
		return
	}
	fmt.Println("Login succesfull")
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(200)
	_ = json.NewEncoder(w).Encode(d)
}
