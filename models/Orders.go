package models

type Orders struct {
	ORDERID          uint       `gorm:"primary_key"`
	CUSTOMER         User       `gorm:"foreign_key:CustomerId" json:"customer"`
	CustomerId       uint       `json:"CustomerId"`
	NUMBEROFPRODUCTS uint       `json:"count"`
	TOTALPRICE       uint       `json:"price"`
	ORDERADDRESS     string     `json:address`
	LISTOFPRODUCTS   []Products `json:products`
}
