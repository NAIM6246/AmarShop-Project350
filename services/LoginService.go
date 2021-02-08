package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

//
type LoginService struct {
	loginrepository *repository.LoginRepository
}

//
func NewLoginService() *LoginService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &LoginService{
		loginrepository: repository.NewLoginRepository(con),
	}
}

//
func (h *LoginService) LogIn(name string) (*models.User, error) {
	return h.loginrepository.Login(name)
}
