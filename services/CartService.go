package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

//
type CartService struct {
	cartRepository *repository.CartRepository
}

func NewCartService() *CartService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &CartService{
		cartRepository: repository.NewCartRepository(con),
	}
}

func (h *CartService) Createcart(order *models.UserCart) (*models.UserCart, error) {
	return h.cartRepository.Create(order)
}

func (h *CartService) GetAll(id uint) ([]*models.Products, error) {
	return h.cartRepository.GetCart(id)
}
