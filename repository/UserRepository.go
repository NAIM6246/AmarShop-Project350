package repository

import (
	"AmarShop/conn"
	"AmarShop/models"
	"fmt"
)

//
type IUserRepository interface {
	Check(u *models.User) error
	Create(user *models.User) (*models.User, error)
	Get(id uint) (*models.User, error)
	GetAll() ([]*models.User, error)
	Update(user *models.User, user2 *models.User) (*models.User, error)
	Delete(user *models.User) error
}

//
type UserRepository struct {
	*BaseRepository
}

//
func NewUserRepository(db *conn.DB) IUserRepository {
	return &UserRepository{
		&BaseRepository{
			db: db.Table(models.UserTable()),
		},
	}
}

//Check
func (repo *UserRepository) Check(u *models.User) error {
	var user models.User
	er := repo.db.Where("mobilenumber=?", u.MOBILENUMBER).First(&user).Error
	if er == nil {
		return nil
	}
	err := repo.db.Where("email=?", u.EMAIL).First(&user).Error
	if err == nil {
		return nil
	}
	return er
}

//Create
func (repo *UserRepository) Create(user *models.User) (*models.User, error) {
	err := repo.db.Create(&user).Error
	if err != nil {
		return nil, err
	}
	return user, nil
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

//Get all user :
func (repo *UserRepository) GetAll() ([]*models.User, error) {
	var users []*models.User
	err := repo.db.Find(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
}

//update user :
func (repo *UserRepository) Update(user *models.User, user2 *models.User) (*models.User, error) {
	err := repo.db.Model(&user).Updates(user2).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(user)
	return user2, nil
}

//delete user :
func (repo *UserRepository) Delete(user *models.User) error {
	e := repo.db.Delete(&user).Error
	return e
}
