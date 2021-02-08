package models

type UserCart struct {
	CARTID      uint `gorm:"primary_Key" json:"cartid"`
	PRODUCTID   uint `gorm:"type="`
	PRODUCTLIST []Products
	CUSTOMERID  uint
	CUSTOMER    User
}

func UserCartTable() string {
	return "UserCart"
}
