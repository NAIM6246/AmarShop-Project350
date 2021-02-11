package handler

import (
	"AmarShop/handler/param"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

//
type HomeHandler struct {
	homeService *services.HomeService
}

//
func NewHomeHandler() *HomeHandler {
	return &HomeHandler{
		homeService: services.NewHomeService(),
	}
}

//handler method
func (h *HomeHandler) HomeHandler(router chi.Router) {
	router.Route("/{category}", func(router chi.Router) {
		router.Route("/{subcategory}", func(router chi.Router) {
			router.Get("/", h.getSubCategoryProducts)
		})
	})
	router.Get("/", h.getCategory)
	router.Get("/featured", h.getFeatured)
	router.Get("/new", h.getNew)
}

func (h *HomeHandler) getCategory(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	d, e := h.homeService.GetAllCategory()
	if e != nil {
		w.WriteHeader(404)
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
		return
	}
	fmt.Println("Getting all product category")
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *HomeHandler) getSubCategoryProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	cat := param.String(r, "category")
	subcat := param.String(r, "subcategory")
	d, e := h.homeService.GetSubCategoryProducts(cat, subcat)
	if e != nil {
		w.WriteHeader(404)
		w.Header().Set("Content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
	}
	fmt.Println("Getting sub category Products")
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *HomeHandler) getFeatured(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	d, e := h.homeService.GetFeatured()
	if e != nil {
		w.WriteHeader(404)
		w.Header().Set("Content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
	}
	fmt.Println("Getting featured Products")
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}

func (h *HomeHandler) getNew(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	d, e := h.homeService.GetNew()
	if e != nil {
		w.WriteHeader(404)
		w.Header().Set("Content-type", "application/json")
		w.Write([]byte(`{"message" : "requested data is not found"}`))
	}
	fmt.Println("Getting New Products")
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-type", "application/json")
	_ = json.NewEncoder(w).Encode(d)
}
