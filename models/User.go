package models

type User struct {
	ID           uint   `gorm:"primary_key"`
	NAME         string `gorm:"type=varchar(100);not null" json:"name"`
	MOBILENUMBER string `gorm:"type=varchar(20);not null" json:"mobilenumber"`
	EMAIL        string `gorm:"type=text;not null" json:"email"`
	PASSWORD     string `gorm:"type=text;not null" json:"pass"`
	ADDRESS      string `gorm:"type=text;not nul" json:"address"`
}

type Login struct {
	MOBILENUMBER string `gorm:"foreign_key" json:"mobile"`
	PASSWORD     string `gorm:"type=text;not null"json:"password"`
}

type UserLogIn struct {
	MobileNumber string `gorm:"foreign_key" json:"mobile"`
	PASSWORD     string `gorm:"type=text"json:""`
}

func UserTable() string {
	return "Users"
}
