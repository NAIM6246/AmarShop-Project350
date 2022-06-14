package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
)

type IOrderRepository interface {
	FindUser(num string) (*uint, error)
	Create(order *models.Order) (*models.Order, error)
	CreateList(list *models.ProductList) (*models.ProductList, error)
	FindProduct(id uint) (*models.Products, error)
	UpdateProduct(p1 models.Products, p2 *models.Products) error
}

type OrderRepository struct {
	*BaseRepository
}

func NewOrderRepository(db *conn.DB) IOrderRepository {
	return &OrderRepository{
		&BaseRepository{
			db:  db.Table(models.OrderTable()),
			db2: db.Table(models.ProductListTable()),
			db3: db.Table(models.UserTable()),
			db4: db.Table(models.ProductsTable()),
		},
	}
}

//
func (repo *OrderRepository) FindUser(num string) (*uint, error) {
	user := models.User{}
	err := repo.db3.Where("mobilenumber=?", num).Find(&user).Error
	if err != nil {
		return nil, err
	}
	return &user.ID, nil
}

//
func (repo *OrderRepository) Create(order *models.Order) (*models.Order, error) {
	err := repo.db.Create(&order).Error
	if err != nil {
		return nil, err
	}
	return order, nil
}

//
func (repo *OrderRepository) CreateList(list *models.ProductList) (*models.ProductList, error) {
	err := repo.db2.Create(&list).Error
	if err != nil {
		return nil, err
	}
	return list, nil
}

//
func (repo *OrderRepository) FindProduct(id uint) (*models.Products, error) {
	var p2 models.Products
	err := repo.db4.Model(&models.Products{}).Where("id=?", id).First(&p2).Error
	if err != nil {
		return nil, err
	}
	return &p2, nil
}

//
func (repo *OrderRepository) UpdateProduct(p1 models.Products, p2 *models.Products) error {
	err := repo.db4.Model(&p2).Updates(p1).Error
	if err != nil {
		return err
	}
	return nil
}
