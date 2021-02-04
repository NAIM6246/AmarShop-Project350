package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"

	"github.com/jinzhu/gorm"
)

//
type UserRepository struct {
	db *gorm.DB
}

//
func NewUserRepository(db *conn.DB) *UserRepository {
	return &UserRepository{
		db: db.Table(models.UserTable()),
	}
}

//Creating user :
func (repo *UserRepository) Create(u *models.User) (*models.User, error) {
	err := repo.db.Create(&u).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(u)
	fmt.Println("repos")

	return u, nil
}

//Get user by id :
func (repo *UserRepository) Get(id uint) (*models.User, error) {
	var user models.User
	err := repo.db.Where("id=?", id).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

//update user :
func (repo *UserRepository) Update(id uint, user2 *models.User) (*models.User, error) {
	var user models.User
	err := repo.db.Model(&models.User{}).Where("id=?", id).First(&user).Error
	if err != nil {
		return nil, err
	}
	e := repo.db.Model(&user).Updates(user2).Error
	if e != nil {
		return nil, err
	}
	fmt.Println(user2)
	return user2, nil
}
