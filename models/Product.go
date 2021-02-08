package models

type Products struct {
	ProductID       uint     `gorm:primary_key`
	ProductCategory Category `gorm:foreign_key`
	PRODUCTNAME     string   `gorm:"type=varchar(100);not null" json:"productName"`
	ProductDetails  string   `json:"details"`
	PRODUCTPRICE    uint     `json:"price"`
	PRDUCTCOLOR     string   `json:"color"`
}

func ProductsTable() string {
	return "Products"
}
