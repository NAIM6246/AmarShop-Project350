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

type ProductHandler struct {
	productService *services.ProductService
}

func NewProductHandler() *ProductHandler {
	return &ProductHandler{
		productService: services.NewProductService(),
	}
}

func (h *ProductHandler) PHandler(rout chi.Router) {
	rout.Route("/{category}", func(router chi.Router) {
		router.Get("/", h.getSameProduct)
	})
	rout.Get("/", h.getProduct)
	rout.Post("/", h.createProduct)
}

func (h *ProductHandler) createProduct(w http.ResponseWriter, r *http.Request) {
	prod := models.Products{}
	err := json.NewDecoder(r.Body).Decode(&prod)
	if err != nil {
		/*
			w.WriteHeader(400)
			w.Header().Add("content-type", "application/json")
			w.Write([]byte(`{"message" : "Bad request error"}`))
			return
		*/
		panic(err)
	}
	fmt.Println(prod)

	d, e := h.productService.CreateProduct(&prod)

	if e != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "Bad Request Error"}`))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Header().Add("content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *ProductHandler) getProduct(w http.ResponseWriter, r *http.Request) {
	d, e := h.productService.GetAll()
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Header().Add("content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
	fmt.Fprintf(w, "will be updated soon")
}

func (h *ProductHandler) getSameProduct(w http.ResponseWriter, r *http.Request) {
	cat := param.String(r, "category")
	d, e := h.productService.GetSameProduct(cat)
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