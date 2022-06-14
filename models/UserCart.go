package models

type UserCart struct {
	ID      uint `gorm:"primary_Key"`
	Product uint `json:"pid"`
	//List     []Products
	Customer uint `json:"cid"`
	//CUSTOMER    User
}

func UserCartTable() string {
	return "user_carts"
}
