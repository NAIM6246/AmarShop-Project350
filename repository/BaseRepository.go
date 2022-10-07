package repository

import "github.com/jinzhu/gorm"

type BaseRepository struct {
	db  *gorm.DB
	db2 *gorm.DB
	db3 *gorm.DB
	db4 *gorm.DB
}
