class AppUrl{
    static URL="http://127.0.0.1:8000/api/"
    static getVisitorDetails=this.URL+"getVisitorDetails"


    static getContactDetails=this.URL+"getContactDetails" 
    static getSiteInfoDetails=this.URL+"getSiteInfoDetails"

    /**home folder e  HomeTop page e ei url set kora ache eita hoilo kivabe category r subcategory ashce oita*/
    static getCategoryDetails=this.URL+"getCategoryDetails"
    static getRegistrationDetails=this.URL+"getRegistrationDetails"
    static getLoginDetails=this.URL+"getLoginDetails"




    /** url for fetching feature,collection,new arrival component  , home folder e featureproduct.js,collection.js,newArrival.js ase*/
    static getProductListByRemark(remark){
        return this.URL+"getProductListByRemark/"+remark;
    }

    /**url for fetching all the products of a category  by clicking any category ,page folder e productListCategoryPage e  data load kora hoise*/
    static getProductListByCategoryLevel1(category){
        return this.URL+"getProductListByCategoryLevel1/"+category;
    }   

    /**fetching all the products of a subcategory by clicking any subcategory from the menubar, page folder e productListSubcategory folder e eita load kora hoise */
    static getProductListByCategoryLevel2(category1,category2){
        return this.URL+"getProductListByCategoryLevel2/"+category1+"/"+category2;
    }
     
    /**fetching any products details by clicking on the product ,page folder e product details page e eita load kora hoise*/
    static getProductDetails(productCode){
        return this.URL+"getProductDetails/"+productCode;
    }
    /* */
    static getNotificationDetails=this.URL+"getNotificationDetails";

    static getProductListBySearch(searchKey){
        return this.URL+"getProductListBySearch/"+searchKey;
    }
    
}

export default AppUrl;