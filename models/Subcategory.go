package models

type SubCategory struct {
	ID         uint   `gorm:primary_key`
	SubCatName string `gorm:"type=varchar(100);not null" json:"subcatName"`
	Category   string `gorm:"type=varchar(100)" json:"catName"`
}

func SubCategoryTable() string {
	return "sub_categories"
}
