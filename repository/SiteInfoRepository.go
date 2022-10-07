package repository

import (
	"AmarShop/conn"
	"AmarShop/models"

	"github.com/jinzhu/gorm"
)

type SiteInfoRepository struct {
	db *gorm.DB
}

func NewSiteInfoRepository(db *conn.DB) *SiteInfoRepository {
	return &SiteInfoRepository{
		db: db.Table(models.SiteInfoTable()),
	}
}

//
func (repo *SiteInfoRepository) AboutUs() {

}
