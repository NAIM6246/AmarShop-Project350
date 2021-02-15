package services

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/models"
	"AmarShop/repository"
)

//
type HomeService struct {
	homeRepository *repository.HomeRepository
}

//
func NewHomeService() *HomeService {
	con := conn.ConnectDB(config.NewDBConfig())
	return &HomeService{
		homeRepository: repository.NewHomeRepository(con),
	}
}

//
func (h *HomeService) GetAllCategory() ([]*models.Category, error) {
	return h.homeRepository.GetAll()
}

func (h *HomeService) GetSubCategoryProducts(cat string, subcat string) ([]*models.Products, error) {
	return h.homeRepository.GetAllSubCatProducts(cat, subcat)
}

func (h *HomeService) GetCategoryProducts(cat string) ([]*models.Products, error) {
	return h.homeRepository.GetAllCatProducts(cat)
}

func (h *HomeService) GetFeatured() ([]*models.Products, error) {
	return h.homeRepository.GetFeatured()
}

func (h *HomeService) GetNew() ([]*models.Products, error) {
	return h.homeRepository.GetNew()
}

func (h *HomeService) GetType(typ string) ([]*models.Products, error) {
	return h.homeRepository.GetType(typ)
}

func (h *HomeService) Search(str string) ([]*models.Products, error) {
	return h.homeRepository.Search(str)
}

func (h *HomeService) About() (string, error) {
	return h.homeRepository.About()
}

func (h *HomeService) Purchase() (string, error) {
	return h.homeRepository.Purchase()
}

func (h *HomeService) Privacy() (string, error) {
	return h.homeRepository.Privacy()
}

func (h *HomeService) Refund() (string, error) {
	return h.homeRepository.Privacy()
}
