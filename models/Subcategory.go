package models

type SubCategory struct {
	ID         uint   `gorm:primary_key`
	SubCatName string `gorm:"type=varchar(100);not null" json:"subName"`
}

func SubCategoryTable() string {
	return "subcategories"
}
