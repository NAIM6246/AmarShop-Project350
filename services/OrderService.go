package services

import (
	"AmarShop/models"
	"AmarShop/repository"
	"fmt"
)

//
type IOrderService interface {
	CreateOrder(orderIn *models.OrderInput) error
}

//
type OrderService struct {
	orderRepository repository.IOrderRepository
}

func NewOrderService(orderderRepository repository.IOrderRepository) IOrderService {
	//con := conn.ConnectDB(config.NewDBConfig())
	return &OrderService{
		orderRepository: orderderRepository,
	}
}

func (h *OrderService) CreateOrder(orderIn *models.OrderInput) error {
	d, e := h.orderRepository.FindUser(orderIn.Customer)
	if e != nil {
		return e
	}
	order := models.Order{
		Customer: *d,
	}
	d1, e1 := h.orderRepository.Create(&order)
	if e1 != nil {
		return e1
	}

	var list models.ProductList
	list.OrderID = d1.ID
	list.ProductID = orderIn.Pi
	list.ProductSize = orderIn.ProductSize
	list.Quantity = orderIn.NUMBEROFPRODUCTS

	li, e2 := h.orderRepository.CreateList(&list)
	if e2 != nil {
		return e2
	}

	p2, er := h.orderRepository.FindProduct(orderIn.Pi)
	if er != nil {
		return er
	}

	var p1 models.Products
	p1.ProductAmmount = p2.ProductAmmount - li.Quantity
	err := h.orderRepository.UpdateProduct(p1, p2)
	if err != nil {
		return err
	}
	fmt.Println("Order Created")
	return nil
}
