package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"

	"github.com/jinzhu/gorm"
)

//
type LoginRepository struct {
	db *gorm.DB
}

//
func NewLoginRepository(db *conn.DB) *LoginRepository {
	return &LoginRepository{
		db: db.Table(models.UserTable()),
	}
}

//
func (repo *LoginRepository) Login(name string) (*models.User, error) {
	var user models.User
	err := repo.db.Where("mobilenumber=?", name).First(&user).Error
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return &user, nil
}
