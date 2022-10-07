package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"
)

type IHomeRepository interface {
	GetAll() ([]*models.Category, error)
	GetAllSubCatProducts(cat string, sub string) ([]*models.Products, error)
	GetAllCatProducts(cat string) ([]*models.Products, error)
	GetFeatured() ([]*models.Products, error)
	GetNew() ([]*models.Products, error)
	Search(str string) ([]*models.Products, error)
	GetType(typ string) ([]*models.Products, error)
	About() (string, error)
	Purchase() (string, error)
	Privacy() (string, error)
	Refund() (string, error)
}

type HomeRepository struct {
	*BaseRepository
}

func NewHomeRepository(db *conn.DB) IHomeRepository {
	return &HomeRepository{
		&BaseRepository{
			db:  db.Table(models.CategoryTable()),
			db2: db.Table(models.ProductsTable()),
			db3: db.Table(models.SubCategoryTable()),
			db4: db.Table(models.SiteInfoTable()),
		},
	}
}

//
func (repo *HomeRepository) GetAll() ([]*models.Category, error) {
	var category []*models.Category
	err := repo.db.Find(&category).Error
	if err != nil {
		return nil, err
	}
	var sub []models.SubCategory
	for _, s := range category {
		//fmt.Println(i, s.CategoryName)
		er := repo.db3.Where("category=?", s.CategoryName).Find(&sub).Error
		if er != nil {
			s.SubCat = nil
		}
		s.SubCat = sub
		fmt.Println(sub)
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

func (repo *HomeRepository) GetAllCatProducts(cat string) ([]*models.Products, error) {
	var catProducts []*models.Products
	err := repo.db2.Where("product_cat=?", cat).Find(&catProducts).Error
	if err != nil {
		return nil, err
	}
	return catProducts, nil
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

func (repo *HomeRepository) Search(str string) ([]*models.Products, error) {
	var searchProducts []*models.Products
	fmt.Println("herer")
	err := repo.db2.Where("product_type LIKE ? OR product_name LIKE ? OR product_cat LIKE ? OR product_sub_cat LIKE ?", str, str, str, str).Find(&searchProducts).Error
	if err != nil {
		return nil, err
	}
	return searchProducts, nil
}

func (repo *HomeRepository) GetType(typ string) ([]*models.Products, error) {
	var featuredProducts []*models.Products
	fmt.Println("herer")
	fmt.Println(typ)
	err := repo.db2.Where("product_type LIKE ?", typ).Find(&featuredProducts).Error
	if err != nil {
		return nil, err
	}
	return featuredProducts, nil
}

//
func (repo *HomeRepository) About() (string, error) {
	var info models.SiteInfo
	err := repo.db4.Find(&info).Error
	if err != nil {
		return "about", err
	}
	return info.AboutUs, nil
}

//
func (repo *HomeRepository) Purchase() (string, error) {
	var info models.SiteInfo
	err := repo.db4.Find(&info).Error
	if err != nil {
		return "purchase", err
	}
	return info.HowToPurchase, nil
}

//
func (repo *HomeRepository) Privacy() (string, error) {
	var info models.SiteInfo
	err := repo.db4.Find(&info).Error
	if err != nil {
		return "privacy", err
	}
	return info.Privacy, nil
}

//
func (repo *HomeRepository) Refund() (string, error) {
	var info models.SiteInfo
	err := repo.db4.Find(&info).Error
	if err != nil {
		return "refund", err
	}
	return info.Refund, nil
}
