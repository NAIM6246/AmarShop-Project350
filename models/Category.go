package models

//
type Category struct {
	ID           uint        `gorm:"primary_key"`
	categoryName string      `gorm:"type=varchar(100);note null" json:"catName"`
	SubCat       SubCategory `gorm:"foreign_key:SubCatID"`
	SubCateID    uint        `json:"subCateId"`
}

func CategoryTable() string {
	return "Categories"
}
