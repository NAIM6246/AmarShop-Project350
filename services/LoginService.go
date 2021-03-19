package services

import (
	"AmarShop/models"
	"AmarShop/repository"
)

//
type ILoginService interface {
	LogIn(name string) (*models.User, error)
}

//
type LoginService struct {
	loginrepository repository.ILoginRepository
}

//
func NewLoginService(loginRepository repository.ILoginRepository) ILoginService {
	//con := conn.ConnectDB(config.NewDBConfig())
	return &LoginService{
		loginrepository: loginRepository,
	}
}

//
func (h *LoginService) LogIn(name string) (*models.User, error) {
	return h.loginrepository.Login(name)
}
