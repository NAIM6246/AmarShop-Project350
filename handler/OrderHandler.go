package handler

import (
	"AmarShop/models"
	"AmarShop/services"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

type OrderHandler struct {
	orderService *services.OrderService
}

func NewOrderHandler() *OrderHandler {
	return &OrderHandler{
		orderService: services.NewOrderService(),
	}
}

func (h *OrderHandler) OrderHandle(router chi.Router) {
	router.Post("/", h.createOrder)
}

func (h *OrderHandler) createOrder(w http.ResponseWriter, r *http.Request) {
	EnableCors(&w)
	fmt.Println("creating Order")
	orderIn := models.OrderInput{}
	/*order := models.Order{
		CustomerId: orderIn.CustomerId,
	}*/
	//fmt.Println(orderIn.ORDERADDRESS)
	err := json.NewDecoder(r.Body).Decode(&orderIn)
	//fmt.Println(orderIn.Pi)
	if err != nil {
		panic(err)
	}
	e := h.orderService.CreateOrder(&orderIn)
	if e != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Header().Add("Content-type", "application/json")
		w.Write([]byte(`{"message", "Bad Request Error"}`))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Header().Add("content-type", "application/json")
	//_ = json.NewEncoder(w).Encode(d)
}
