package param

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
)

//converting idstring to int :
func Int(r *http.Request, p string) int {
	idString := chi.URLParam(r, p)

	if len(idString) != 0 {
		id, err := strconv.Atoi(idString)

		if err != nil {
			return 0
		}
		return id
	}
	return 0
}

func UInt(r *http.Request, p string) uint {
	return uint(Int(r, p))
}

//converting string
func String(r *http.Request, p string) string {
	idString := chi.URLParam(r, p)
	fmt.Println(idString)
	fmt.Println("param")
	if len(idString) != 0 {
		return idString
	}
	return ""
}
