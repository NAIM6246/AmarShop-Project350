package repository

import (
	"AmarShop/conn"
	"AmarShop/models"

	"github.com/jinzhu/gorm"
)

type HomeRepository struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func NewHomeRepository(db *conn.DB) *HomeRepository {
	return &HomeRepository{
		db:  db.Table(models.CategoryTable()),
		db2: db.Table(models.ProductsTable()),
	}
}

//
func (repo *HomeRepository) GetAll() ([]*models.Category, error) {
	var category []*models.Category
	err := repo.db.Find(&category).Error
	if err != nil {
		return nil, err
	}
	return category, nil
}

func (repo *HomeRepository) GetAllSubCatProducts(cat string, sub string) ([]*models.Products, error) {
	var subCatProducts []*models.Products
	err := repo.db2.Where("product_cat=? AND product_sub_cat=?", cat, sub).Find(&subCatProducts).Error
	if err != nil {
		return nil, err
	}
	return subCatProducts, nil
}

func (repo *HomeRepository) GetFeatured() ([]*models.Products, error) {
	var featuredProducts []*models.Products
	err := repo.db2.Where("product_type LIKE ?", "Featured").Find(&featuredProducts).Error
	if err != nil {
		return nil, err
	}
	return featuredProducts, nil
}

func (repo *HomeRepository) GetNew() ([]*models.Products, error) {
	var featuredProducts []*models.Products
	err := repo.db2.Where("product_type LIKE ?", "%New Arrival%").Find(&featuredProducts).Error
	if err != nil {
		return nil, err
	}
	return featuredProducts, nil
}
