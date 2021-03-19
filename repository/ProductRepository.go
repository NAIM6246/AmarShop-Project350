package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"
)

type IProductRepository interface {
	CreateSubCat(sub *models.SubCategory) (*models.SubCategory, error)
	CheckSub(subcat *models.SubCategory) error
	CheckCat(cat *models.Category) error
	CreateCat(cat *models.Category) error
	Create(prod *models.Products) (*models.Products, error)
	Get(id uint) ([]*models.Products, error)
	GetAll() ([]*models.Products, error)
	GetSame(cat string) ([]*models.Products, error)
	Delete(prod *models.Products) error
}

type ProductRepository struct {
	*BaseRepository
}

//
func NewProductRepository(db *conn.DB) IProductRepository {
	return &ProductRepository{
		&BaseRepository{
			db:  db.Table(models.ProductsTable()),
			db2: db.Table(models.SubCategoryTable()),
			db3: db.Table(models.CategoryTable()),
		},
	}
}

//
func (repo *ProductRepository) CreateSubCat(sub *models.SubCategory) (*models.SubCategory, error) {
	e := repo.db2.Create(&sub).Error
	if e != nil {
		return nil, e
	}
	return sub, nil
}

//
func (repo *ProductRepository) CheckSub(subcat *models.SubCategory) error {
	var sub models.SubCategory
	err := repo.db2.Where("sub_cat_name=?", subcat.SubCatName).First(&sub).Error
	err2 := repo.db2.Where("category=?", subcat.Category).First(&sub).Error

	var e error
	if err != nil {
		e = err
	} else if err2 != nil {
		e = err2
	} else {
		e = nil
	}

	return e
}

//
func (repo *ProductRepository) CheckCat(cat *models.Category) error {
	var cat2 models.Category
	return repo.db3.Where("category_name=?", cat.CategoryName).First(&cat2).Error
}

//
func (repo *ProductRepository) CreateCat(cat *models.Category) error {
	return repo.db3.Create(&cat).Error
}

//
func (repo *ProductRepository) Create(prod *models.Products) (*models.Products, error) {
	err := repo.db.Create(&prod).Error
	if err != nil {
		return nil, err
	}
	return prod, nil
}

//geting single product
func (repo *ProductRepository) Get(id uint) ([]*models.Products, error) {
	var prod []*models.Products
	err := repo.db.Where("id=?", id).First(&prod).Error
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	fmt.Println(&prod)
	fmt.Println("Product repo")
	return prod, nil
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

//
func (repo *ProductRepository) Delete(prod *models.Products) error {
	/*
		var prod *models.Products
		err := repo.db.Where("id=?", id).First(&prod).Error
		if err != nil {
			return err
		}
	*/
	e := repo.db.Delete(&prod).Error
	return e
}
