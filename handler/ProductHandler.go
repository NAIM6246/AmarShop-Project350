package handler

import (
	"AmarShop/handler/param"
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

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
		router.Get("/product", h.getProductByID)
		router.Get("/", h.getSameProduct)
	})
	rout.Get("/", h.getProduct)
	rout.Post("/", h.createProduct)
}

func (h *ProductHandler) createProduct(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	//src := h.upload_file(w, r)
	//fmt.Println(src)
	prod := models.Products{}
	//prod.ImageSrc = src
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
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *ProductHandler) getProductByID(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	id := param.UInt(r, "category")
	//fmt.Println(id)
	productService := services.NewProductService()
	d, e := productService.GetProductByID(id)
	if e != nil {
		w.WriteHeader(200)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"name" : "Not found"}`))
		return
	}
	w.WriteHeader(200)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)

}

func (h *ProductHandler) upload_file(w http.ResponseWriter, r *http.Request) (src string) {
	EnableCors(&w)
	file, handler, err1 := r.FormFile("image")
	if err1 != nil {
		fmt.Println(err1)
	}
	defer file.Close()
	fmt.Println(handler.Filename)
	sr := fmt.Sprintf("./uploads/" + handler.Filename)
	dst, e := os.Create(sr)
	if e != nil {
		fmt.Println(e)
	}
	fmt.Println(dst)
	defer dst.Close()
	io.Copy(dst, file)
	return sr
	//return "location"
}
