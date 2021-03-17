package models

type OrderInput struct {
	//ID uint `gorm:"primary_key"`
	//CUSTOMER         User       `gorm:"foreign_key:CustomerId" json:"customer"`
	//Customer         uint       `json:"Customer"`
	Customer         string     `json:"mobile"`
	NUMBEROFPRODUCTS uint       `json:"numberofproducts"`
	ProductSize      string     `json:"size"`
	TOTALPRICE       uint       `json:"price"`
	ORDERADDRESS     string     `json:"address"`
	Pi               uint       `json:"pid"`
	LISTOFPRODUCTS   []Products //`json:products`
}
