package config

import "sync"

//DB :
type DBConfig struct {
	Server   string
	Port     int
	User     string
	Password string
	DbName   string
}

var dbConfig *DBConfig

func mapDbConfig() {
	dbConfig = &DBConfig{
		Server:   "localhost",
		Port:     1433,
		User:     "sa",
		Password: "golangdb123456.",
		DbName:   "AmarShop",
	}
}

//returning db configuration instance :
func NewDBConfig() *DBConfig {
	var loadDBOnce sync.Once
	loadDBOnce.Do(mapDbConfig)
	return dbConfig
}
