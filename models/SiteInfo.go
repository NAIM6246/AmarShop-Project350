package models

type SiteInfo struct {
	AboutUs       string
	HowToPurchase string
	Privacy       string
	Refund        string
}

func SiteInfoTable() string {
	return "SiteInfo"
}
