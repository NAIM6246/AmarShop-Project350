package handler

import (
	"AmarShop/handler/param"
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
)

type CartHandler struct {
	cartService *services.CartService
}

func NewCartHandler() *CartHandler {
	return &CartHandler{
		cartService: services.NewCartService(),
	}
}

func (h *CartHandler) CartHandle(router chi.Router) {
	router.Post("/", h.createCart)
	router.Route("/{id}", func(rout chi.Router) {
		rout.Get("/", h.getCart)
	})
}

func (h *CartHandler) createCart(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	cart := models.UserCart{}

	err := json.NewDecoder(r.Body).Decode(&cart)
	if err != nil {
		panic(err)
	}
	d, e := h.cartService.Createcart(&cart)
	if e != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"message", "Bad Request Error"}`))
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Header().Add("content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *CartHandler) getCart(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	id := param.UInt(r, "id")
	d, e := h.cartService.GetAll(id)
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Add("content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}
