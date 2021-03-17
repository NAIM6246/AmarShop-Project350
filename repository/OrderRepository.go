package repository

import (
	"AmarShop/conn"
	"AmarShop/models"

	"github.com/jinzhu/gorm"
)

type OrderRepository struct {
	db  *gorm.DB
	db2 *gorm.DB
	db3 *gorm.DB
	db4 *gorm.DB
}

func NewOrderRepository(db *conn.DB) *OrderRepository {
	return &OrderRepository{
		db:  db.Table(models.OrderTable()),
		db2: db.Table(models.ProductListTable()),
		db3: db.Table(models.UserTable()),
		db4: db.Table(models.ProductsTable()),
	}
}

//
/*
func (repo *OrderRepository) FindUser(num string) (*uint, error) {
	user := models.User{}
	err := repo.db3.Where("mobilenumber=?", num).Find(&user).Error
	if err != nil {
		return nil, err
	}
	return &user.ID, nil
}
*/
//
func (repo *OrderRepository) Create(order *models.Order) (*models.Order, error) {
	err := repo.db.Create(&order).Error
	if err != nil {
		return nil, err
	}
	return order, nil
}

//
//func (repo *OrderRepository) CreateList()
//
func (repo *OrderRepository) CreateList(list *models.ProductList) (*models.ProductList, error) {
	err := repo.db2.Create(&list).Error
	if err != nil {
		return nil, err
	}
	return list, nil
}

//
/*
func (repo *OrderRepository) Createin(orderIn *models.OrderInput) /**models.OrderInput, error {
	user := models.User{}
	errr := repo.db3.Where("mobilenumber=?", orderIn.Customer).Find(&user).Error
	if errr != nil {
		return errr
	}
	fmt.Println(orderIn)
	order := models.Order{
		Customer: user.ID,
	}

	err := repo.db.Create(&order).Error
	if err != nil {
		return err
	}

	fmt.Printf("naim " + string(orderIn.NUMBEROFPRODUCTS))
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
	var p1 models.Products
	var p2 models.Products
	e1 := repo.db4.Model(&models.Products{}).Where("id=?", orderIn.Pi).First(&p2).Error
	if e1 != nil {
		return e1
	}
	p1.ProductAmmount = p2.ProductAmmount - list.Quantity
	fmt.Println(p1)
	fmt.Println("hi")
	e2 := repo.db4.Model(&p2).Updates(p1).Error
	if e2 != nil {
		return e2
	}
	return nil
}*/
/*
//
func (repo *OrderRepository) FindProduct(id uint) (*models.Products, error) {
	var p2 models.Products
	fmt.Println(id)
	err := repo.db4.Model(&models.Products{}).Where("id=?", id).First(&p2).Error
	if err != nil {
		return nil, err
	}
	return &p2, nil
}
*/
/*
//
func (repo *OrderRepository) UpdateProduct(p1 models.Products, p2 *models.Products) error {
	err := repo.db4.Model(&p2).Updates(p1).Error
	if err != nil {
		return err
	}
	return nil
}
*/
