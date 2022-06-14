package models

type ProductList struct {
	ID          uint `gorm:"primary_key"`
	OrderID     uint
	CartID      uint
	ProductID   uint
	ProductSize string
	Quantity    uint
	//List      []Products
}

func ProductListTable() string {
	return "product_lists"
}
