package services

import (
	"AmarShop/models"
	"AmarShop/repository"
)

//
type ICartService interface {
	Createcart(order *models.UserCart) (*models.UserCart, error)
	GetAll(id uint) ([]*models.Products, error)
}

//
type CartService struct {
	cartRepository repository.ICartRepository
}

func NewCartService(cartRepository repository.ICartRepository) ICartService {
	//con := conn.ConnectDB(config.NewDBConfig())
	return &CartService{
		cartRepository: cartRepository,
	}
}

func (h *CartService) Createcart(order *models.UserCart) (*models.UserCart, error) {
	return h.cartRepository.Create(order)
}

func (h *CartService) GetAll(id uint) ([]*models.Products, error) {
	return h.cartRepository.GetCart(id)
}
