package models

type Products struct {
	ID uint `gorm:"primary_key"`
	//ProductCat     Category `gorm:"foreign_key:CategoryID"`
	ProductCat     string `json:"productCat"`
	ProductSubCat  string `json:"productSubCat"`
	CategoryID     uint   `json:"categoryId"`
	ProductName    string `gorm:"type=varchar(100);not null" json:"productName"`
	ProductDetails string `json:"details"`
	ProductPrice   uint   `json:"price"`
	ProductColor   string `json:"color"`
}

type ProductCategory struct {
}

func ProductsTable() string {
	return "Products"
}
