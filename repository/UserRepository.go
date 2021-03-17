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

/*
//Creating user :
func (repo *UserRepository) Create(u *models.User) (*models.User, error, error) {
	var use models.User
	//fmt.Println(u.MOBILENUMBER)
	//fmt.Println(u.EMAIL)
	//fmt.Println("reposi")
	er := repo.db.Where("mobilenumber=?", u.MOBILENUMBER).First(&use).Error
	er2 := repo.db.Where("email=?", u.EMAIL).First(&use).Error
	//fmt.Println(er)
	//fmt.Println(er2)
	if er != nil && er2 != nil {
		err := repo.db.Create(&u).Error
		fmt.Println(err)
		if err != nil {
			if er != nil {
				return nil, er, err
			} else {
				return nil, er2, err
			}
		}
		fmt.Println(u)
		fmt.Println("repos")
		if er != nil {
			return u, er, nil
		} else {
			return u, er2, nil
		}
		//return u, nil, nil
	}
	fmt.Println("asdfasdfasdfasdf")
	return nil, nil, nil

}
*/

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
	/*var user models.User
	err := repo.db.Model(&models.User{}).Where("id=?", id).First(&user).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(user)
	*/
	err := repo.db.Model(&user).Updates(user2).Error
	if err != nil {
		return nil, err
	}
	fmt.Println(user)
	return user2, nil
}

//delete user :
func (repo *UserRepository) Delete(user *models.User) error {
	/*var user models.User
	err := repo.db.Where("id=?", id).First(&user).Error
	if err != nil {
		return err
	}*/
	e := repo.db.Delete(&user).Error
	return e
}

/*
//creatin login
func (repo *UserRepository) Login(name string) (*models.User, error) {
	var user models.User
	//fmt.Println(name)
	//fmt.Println("hi")
	err := repo.db.Where("mobilenumber=?", name).First(&user).Error
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return &user, nil
}
*/
