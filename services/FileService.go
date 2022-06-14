package services

import (
	"fmt"
	"mime/multipart"
)

//
type FileService struct {
}

//
func NewFileService() *FileService {
	return &FileService{}
}

func (h *FileService) Upload(file1 multipart.File, handler1 *multipart.FileHeader, id uint) error {
	fmt.Println("asdfasdf")
	return nil
}
