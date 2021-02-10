package models

//
type Category struct {
	ID           uint   `gorm:"primary_key"`
	CategoryName string `gorm:"type=varchar(100);note null" json:"catName"`
	//SubCat       SubCategory `gorm:"foreign_key:SubCatID"`
	SubCatID uint `json:"subCatId"`
}

func CategoryTable() string {
	return "categories"
}
