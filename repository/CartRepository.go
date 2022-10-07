package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"
)

type ICartRepository interface {
	Create(cart *models.UserCart) (*models.UserCart, error)
	GetCart(id uint) ([]*models.Products, error)
}

type CartRepository struct {
	*BaseRepository
}

func NewCartRepository(db *conn.DB) ICartRepository {
	return &CartRepository{
		&BaseRepository{
			db:  db.Table(models.UserCartTable()),
			db2: db.Table(models.ProductsTable()),
		},
	}
}

//
func (repo *CartRepository) Create(cart *models.UserCart) (*models.UserCart, error) {
	err := repo.db.Create(&cart).Error
	if err != nil {
		return nil, err
	}
	fmt.Println("Order Created")
	return cart, nil
}

func (repo *CartRepository) GetCart(id uint) ([]*models.Products, error) {
	var cart []*models.UserCart
	err := repo.db.Where("customer=?", id).Find(&cart).Error
	if err != nil {
		return nil, err
	}
	var prod *models.Products
	var pro []*models.Products
	fmt.Println(cart)
	for _, s := range cart {
		//fmt.Println(i, s.CategoryName)
		er := repo.db2.Where("id=?", s.Product).Find(&prod).Error
		if er != nil {
			pro = append(pro, nil)
		}
		pro = append(pro, prod)
		fmt.Println(prod)
	}
	fmt.Println("sfdghjk")
	return pro, nil
}
