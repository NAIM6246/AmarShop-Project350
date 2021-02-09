package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"

	"github.com/jinzhu/gorm"
)

type ProductRepository struct {
	db *gorm.DB
}

func NewProductRepository(db *conn.DB) *ProductRepository {
	//con := conn.ConnectDB(&config.DBConfig{})
	return &ProductRepository{
		db: db.Table(models.ProductsTable()),
	}
}

func (repo *ProductRepository) Create(p *models.Products) (*models.Products, error) {
	err := repo.db.Create(&p).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(p)
	fmt.Println("Product repo")
	return p, nil
}

//geting single product
func (repo *ProductRepository) Get(id uint) (*models.Products, error) {
	var prod models.Products
	err := repo.db.Where("id=?", id).First(&prod).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(prod)
	fmt.Println("Product repo")
	return &prod, nil
}

//
func (repo *ProductRepository) GetAll() ([]*models.Products, error) {
	var prod []*models.Products
	err := repo.db.Find(&prod).Error
	if err != nil {
		return nil, err
	}
	return prod, nil
}

//
func (repo *ProductRepository) GetSame(cat string) ([]*models.Products, error) {
	var prod []*models.Products
	err := repo.db.Where("product_cat=?", cat).Find(&prod).Error
	if err != nil {
		return nil, err
	}
	return prod, nil
}
