package models

type Category struct {
	CategorId    uint   `gorm:primary_key`
	categoryName string `gorm:"type=varchar(100);note null" json:"catName"`
}
