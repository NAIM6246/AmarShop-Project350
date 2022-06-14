package models

//
type SiteInfo struct {
	AboutUs       string `json:"aboutUs"`
	HowToPurchase string `json:"purchase"`
	Privacy       string `json:"privacy"`
	Refund        string `json:"refund"`
}

//
func SiteInfoTable() string {
	return "Site_Infos"
}
