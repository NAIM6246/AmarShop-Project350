package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"

	"github.com/jinzhu/gorm"
)

type ProductRepository struct {
	db  *gorm.DB
	db2 *gorm.DB
	db3 *gorm.DB
	//	catgoryRepository *CategoryRepository
}

//
func NewProductRepository(db *conn.DB) *ProductRepository {
	return &ProductRepository{
		db:  db.Table(models.ProductsTable()),
		db2: db.Table(models.SubCategoryTable()),
		db3: db.Table(models.CategoryTable()),
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

/*
//
func (repo *ProductRepository) Create(p *models.Products) (*models.Products, error) {

		//converting to category 3:40 10/2
		var sub models.SubCategory
		subCat := models.SubCategory{
			SubCatName: p.ProductSubCat,
			Category:   p.ProductCat,
		}
		err2 := repo.db2.Where("sub_cat_name=?", subCat.SubCatName).First(&sub).Error
		err3 := repo.db2.Where("category=?", subCat.Category).First(&sub).Error
		if err2 != nil || err3 != nil {
			_ = repo.db2.Create(&subCat).Error
		}

	var cate models.Category
	cat := models.Category{
		CategoryName: p.ProductCat,
		SubCatID:     subCat.ID,
	}
	e := repo.db3.Where("category_name=?", cat.CategoryName).First(&cate).Error
	if e != nil {
		_ = repo.db3.Create(&cat).Error
	}

	//end of category
	fmt.Println(p)
	fmt.Println("Product repo")
	fmt.Println(subCat)
	fmt.Println("Prod repo")

	//creating Product
	//p.CategoryID = cat.ID
	//fmt.Printf("cat id "+ string(p.CategoryID))
	err := repo.db.Create(&p).Error
	if err != nil {
		return nil, err
	}
	return p, nil
}
*/

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
func (repo *ProductRepository) GetByID(id uint) (*models.Products, error) {
	var prod models.Products
	err := repo.db.Where("id=?", id).First(&prod).Error
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	fmt.Println(&prod)
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

//
func (repo *ProductRepository) Update(p1 models.Products, p2 *models.Products) error {
	err := repo.db.Model(&p2).Updates(p1).Error
	if err != nil {
		return err
	}
	return nil
}
