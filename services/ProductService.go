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

	subcat := models.SubCategory{
		SubCatName: prod.ProductSubCat,
		Category:   prod.ProductCat,
	}
	sub, e1 := h.CreateSubCat(&subcat)
	if e1 != nil {
		return nil, e1
	}

	cat := models.Category{
		CategoryName: prod.ProductCat,
		SubCatID:     sub.ID,
	}

	e2 := h.productRepository.CheckCat(&cat)
	if e2 != nil {
		e := h.productRepository.CreateCat(&cat)
		if e != nil {
			return nil, e
		}
	}
	//create product
	return h.productRepository.Create(prod)
}

//
func (h *ProductService) CreateSubCat(sub *models.SubCategory) (*models.SubCategory, error) {
	e1 := h.productRepository.CheckSub(sub)
	if e1 != nil {
		d, e := h.productRepository.CreateSubCat(sub)
		if e != nil {
			return nil, e
		}
		return d, nil
	}
	return sub, nil
}

//
func (h *ProductService) GetProductByID(id uint) ([]*models.Products, error) {
	return h.productRepository.Get(id)
}

//
func (h *ProductService) GetProductById(id uint) (*models.Products, error) {
	return h.productRepository.GetByID(id)
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
	prod, e := h.productRepository.Get(id)
	if e != nil {
		return e
	}
	err := h.productRepository.Delete(prod[0])
	return err
}

//
func (h *ProductService) UpdateProduct(p1 models.Products, p2 *models.Products) error {
	return h.productRepository.Update(p1, p2)
}
