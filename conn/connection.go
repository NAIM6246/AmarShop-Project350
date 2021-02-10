package conn

import (
	"AmarShop/config"
	"AmarShop/models"
	"fmt"
	"log"
	"sync"

	"github.com/jinzhu/gorm"
	//mssql
	_ "github.com/jinzhu/gorm/dialects/mssql"
)

const dbtype = "mssql"

//DB
type DB struct {
	*gorm.DB
}

func NewDB() *DB {
	return &DB{}
}

var dbInstance *DB
var connDBOnce sync.Once

func ConnectDB(config *config.DBConfig) *DB {
	connDBOnce.Do(func() {
		_ = connectDB(config)
	})

	return dbInstance
}

func connectDB(config *config.DBConfig) error {
	connString := fmt.Sprintf("server=%s; port=%d; database=%s;", config.Server, config.Port, config.DbName)
	conn, err := gorm.Open(dbtype, connString)
	if err != nil {
		log.Fatal("Open connection failed: ", err.Error())
		return err
	}
	fmt.Println("Database connected succesfully")
	dbInstance = &DB{conn}
	return nil
}

//not commited created Product & usercart table(5/2/21)
func (db *DB) Migration() {
	fmt.Println("calling")
	db.AutoMigrate(&models.User{}, &models.Products{}, &models.UserCart{}, &models.Category{}, &models.Orders{}, &models.SiteInfo{}, &models.SubCategory{})
}
