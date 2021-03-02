package handler

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/go-chi/chi"
)

//
type FileHandler struct {
}

//
func NewFileHandler() *FileHandler {
	return &FileHandler{}
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
