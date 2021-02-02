package services

import "AmarShop/models"

type UserService struct {
}

func NewUserService() *UserService {
	return &UserService{}
}

func (h *UserService) GetUserByID(a uint) (*models.User, error) {
	user := models.User{
		ID:   a,
		NAME: "DEMO",
	}
	return &user, nil
}
