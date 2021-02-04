package models

type User struct {
	ID       uint   `gorm:"primary_key" json:"id"`
	NAME     string `gorm:"type=varchar(100);not null" json:"name"`
	EMAIL    string `gorm:"type=text;not null" json:"email"`
	PASSWORD string `gorm:"type=text;not null" json:"pass"`
}

func UserTable() string {
	return "Users"
}
