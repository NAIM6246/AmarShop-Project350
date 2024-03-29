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

type IProductHandler interface {
	IHandler
}

type ProductHandler struct {
	productService services.IProductService
}

func NewProductHandler(productservice services.IProductService) IProductHandler {
	return &ProductHandler{
		productService: productservice,
	}
}

func (h *ProductHandler) Handle(rout chi.Router) {
	rout.Route("/{category}", func(router chi.Router) {
		router.Get("/product", h.getProductByID)
		router.Get("/", h.getSameProduct)
		router.Delete("/", h.deleteProduct)
	})
	rout.Get("/", h.getProduct)
	rout.Post("/", h.createProduct)
}

func (h *ProductHandler) createProduct(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	fmt.Println("enterdS")
	//src := h.upload_file(w, r)
	//fmt.Println(src)
	prod := models.Products{}
	//prod.ImageSrc = src
	err := json.NewDecoder(r.Body).Decode(&prod)
	if err != nil {
		fmt.Println("asdfasdfasdfsadfsadfasd")
		/*
			w.WriteHeader(400)
			w.Header().Add("content-type", "application/json")
			w.Write([]byte(`{"message" : "Bad request error"}`))
			return
		*/
		panic(err)
	}
	//fmt.Println(prod)

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
	EnableCors(&w)
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
	EnableCors(&w)
	cat := param.String(r, "category")
	d, e := h.productService.GetSameProduct(cat)
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
		return
	}
	fmt.Println(d)
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *ProductHandler) getProductByID(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	id := param.UInt(r, "category")
	//fmt.Println(id)
	//productService := services.NewProductService()
	d, e := h.productService.GetProductByID(id)
	if e != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"name" : "Not found"}`))
		return
	}
	w.WriteHeader(200)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)

}

//Delete :
func (h *ProductHandler) deleteProduct(w http.ResponseWriter, r *http.Request) {
	id := param.UInt(r, "category")
	e := h.productService.DeleteProduct(id)
	if e != nil {
		w.WriteHeader(400)
		w.Header().Add("content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not fonud"}`))
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
