package models

type OrderInput struct {
	//ID uint `gorm:"primary_key"`
	//CUSTOMER         User       `gorm:"foreign_key:CustomerId" json:"customer"`
	Customer         uint       `json:"Customer"`
	NUMBEROFPRODUCTS uint       `json:"count"`
	ProductSize      string     `json:"size"`
	TOTALPRICE       uint       `json:"price"`
	ORDERADDRESS     string     `json:"address"`
	Pi               uint       `json:"pid"`
	LISTOFPRODUCTS   []Products //`json:products`
}

type Order struct {
	ID       uint `gorm:"primary_key"`
	Customer uint
	List     []Products
	//ListID   uint `gorm:"listId"`
}

func OrderTable() string {
	return "Orders"
}
