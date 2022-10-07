package handler

import "github.com/go-chi/chi"

type IHandler interface {
	Handle(router chi.Router)
}
