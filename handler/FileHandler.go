package handler

import (
	"AmarShop/services"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/go-chi/chi"
)

//
type FileHandler struct {
	fileService *services.FileService
}

//
func NewFileHandler() *FileHandler {
	return &FileHandler{
		fileService: services.NewFileService(),
	}
}

//
func (h *FileHandler) UploadHandler(router chi.Router) {
	router.Post("/", h.uploadFile)
}

//
func (h *FileHandler) uploadFile(w http.ResponseWriter, r *http.Request) {
	/*
		required update:
			create service layer for upload handler
			update product data with image source
	*/

	r.ParseMultipartForm(10 << 20)

	file, handler, err := r.FormFile("image")
	if err != nil {
		fmt.Println("Error uploading file")
		panic(err)
	}

	//creating file service
	e := h.fileService.Upload(file, handler, pid)
	if e != nil {
		fmt.Println("upload failed")
		panic(e)
	}
	//fmt.Println(d)
	//
	defer file.Close()
	fmt.Println(handler.Filename)

	//creating  file
	dst, err := os.Create("./uploads/" + handler.Filename)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if _, err := io.Copy(dst, file); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("image uploaded successfully")
	fmt.Fprintf(w, "Image uploaded successfully")

}
