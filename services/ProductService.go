package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

type ProductService struct {
	productRepository *repository.ProductRepository
}

//
func NewProductService() *ProductService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &ProductService{
		productRepository: repository.NewProductRepository(con),
	}
}

//
func (h *ProductService) CreateProduct(prod *models.Products) (*models.Products, error) {
	return h.productRepository.Create(prod)
}

//
func (h *ProductService) GetProductByID(id uint) ([]*models.Products, error) {
	return h.productRepository.Get(id)
}

//
func (h *ProductService) GetAll() ([]*models.Products, error) {
	return h.productRepository.GetAll()
}

//
func (h *ProductService) GetSameProduct(cat string) ([]*models.Products, error) {
	return h.productRepository.GetSame(cat)
}

//
func (h *ProductService) DeleteProduct(id uint) error {
	return h.productRepository.Delete(id)
}
