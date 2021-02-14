package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"

	"github.com/jinzhu/gorm"
)

type OrderRepository struct {
	db  *gorm.DB
	db2 *gorm.DB
}

func NewOrderRepository(db *conn.DB) *OrderRepository {
	return &OrderRepository{
		db:  db.Table(models.OrderTable()),
		db2: db.Table(models.ProductListTable()),
	}
}

//
func (repo *OrderRepository) Create(orderIn *models.OrderInput) /**models.OrderInput,*/ error {
	order := models.Order{
		Customer: orderIn.Customer,
	}

	err := repo.db.Create(&order).Error
	if err != nil {
		return err
	}
	var list models.ProductList
	list.OrderID = order.ID
	list.ProductID = orderIn.Pi
	list.ProductSize = orderIn.ProductSize
	list.Quantity = orderIn.NUMBEROFPRODUCTS

	er := repo.db2.Create(&list).Error
	if er != nil {
		return er
	}
	fmt.Println("Order Created")
	return nil
}

//
func (repo *OrderRepository) CreateList(list *models.ProductList) (*models.ProductList, error) {
	err := repo.db.Create(&list).Error
	if err != nil {
		return nil, err
	}
	fmt.Println("Order Created")
	return list, nil
}
