package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

type UserService struct {
	userRepository *repository.UserRepository
}

func NewUserService() *UserService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &UserService{
		userRepository: repository.NewUserRepository(con),
	}
}

//get User by id :
func (h *UserService) GetUserByID(id uint) (*models.User, error) {
	return h.userRepository.Get(id)
}

//Get all user :
func (h *UserService) GetAll() ([]*models.User, error) {
	return h.userRepository.GetAll()
}

//create user :
func (h *UserService) CreateUser(user *models.User) (*models.User, error) {
	return h.userRepository.Create(user)
}

//update user :
func (h *UserService) UpdateUser(user *models.User, id uint) (*models.User, error) {
	return h.userRepository.Update(id, user)
}

//delete User :
func (h *UserService) DeleteUser(id uint) error {
	return h.userRepository.Delete(id)
}

/*
func (h *UserService) LogIn(name string) (*models.User, error) {
	return h.userRepository.Login(name)
}
*/
