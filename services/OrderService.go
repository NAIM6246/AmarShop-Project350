package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

//
type OrderService struct {
	orderRepository *repository.OrderRepository
}

func NewOrderService() *OrderService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &OrderService{
		orderRepository: repository.NewOrderRepository(con),
	}
}

func (h *OrderService) CreateOrder(order *models.OrderInput) /**models.OrderInput,*/ error {
	return h.orderRepository.Create(order)
}

func (h *OrderService) CreatProductList(list *models.ProductList) (*models.ProductList, error) {
	return h.orderRepository.CreateList(list)
}
