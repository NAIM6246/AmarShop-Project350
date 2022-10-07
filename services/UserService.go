package services

import (
	"AmarShop/models"
	"AmarShop/repository"
)

//
type IUserService interface {
	GetUserByID(id uint) (*models.User, error)
	GetAll() ([]*models.User, error)
	CreateUser(user *models.User) (*models.User, error, error)
	UpdateUser(user *models.User, id uint) (*models.User, error)
	DeleteUser(id uint) error
}

//
type UserService struct {
	userRepository repository.IUserRepository
}

func NewUserService(userRepository repository.IUserRepository) IUserService {
	//con := conn.ConnectDB(config.NewDBConfig())
	return &UserService{
		userRepository: userRepository,
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
func (h *UserService) CreateUser(user *models.User) (*models.User, error, error) {
	er := h.userRepository.Check(user)
	if er == nil {
		return nil, nil, nil
	}
	user2, err := h.userRepository.Create(user)

	return user2, err, er
}

//update user :
func (h *UserService) UpdateUser(user *models.User, id uint) (*models.User, error) {
	user2, err := h.userRepository.Get(id)
	if err != nil {
		return nil, err
	}
	return h.userRepository.Update(user2, user)
}

//delete User :
func (h *UserService) DeleteUser(id uint) error {
	user, err := h.userRepository.Get(id)
	if err != nil {
		return err
	}
	return h.userRepository.Delete(user)
}
