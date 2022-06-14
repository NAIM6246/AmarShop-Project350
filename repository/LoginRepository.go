package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"
)

//
type ILoginRepository interface {
	Login(name string) (*models.User, error)
}

//
type LoginRepository struct {
	*BaseRepository
}

//
func NewLoginRepository(db *conn.DB) ILoginRepository {
	return &LoginRepository{
		&BaseRepository{
			db: db.Table(models.UserTable()),
		},
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
