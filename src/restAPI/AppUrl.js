/*class AppUrl{
    static URL="http://127.0.0.1:8080/"
    static getRegistrationDetails=this.URL +"users/post"
    static getLoginDetails=this.URL+"login/"
    
}

export default AppUrl;
*/
class AppUrl{
    static URL="http://127.0.0.1:8080/"
   /* static getVisitorDetails=this.URL+"getVisitorDetails"
    static getContactDetails=this.URL+"getContactDetails"
    static getSiteInfoDetails=this.URL+"getSiteInfoDetails"
    */
    static getCategoryDetails=this.URL+"home/"
    static getRegistrationDetails=this.URL +"users/post"
    static getLoginDetails=this.URL+"login/"



    //Done
    /** url for fetching feature,collection,new arrival component  , home folder e featureproduct.js,collection.js,newArrival.js ase*/
    static getProductListByRemark(remark){
        return this.URL+"home/"+remark+"/type";
    }

    /**url for fetching all the products of a category  by clicking any category ,page folder e productListCategoryPage e  data load kora hoise*/
    static getProductListByCategoryLevel1(category){
        return this.URL+"getProductListByCategoryLevel1/"+category;
    }   

    /**fetching all the products of a subcategory by clicking any subcategory from the menubar, page folder e productListSubcategory folder e eita load kora hoise */
    static getProductListByCategoryLevel2(category1,category2){
        return this.URL+"home/"+category1+"/"+category2;
    }
     
    /**fetching any products details by clicking on the product ,page folder e product details page e eita load kora hoise*/
    static getProductDetails(productCode){
        return this.URL+"product/"+productCode+"/product";
    }
    /* */
    static getNotificationDetails=this.URL+"getNotificationDetails";

    static getProductListBySearch(searchKey){
        return this.URL+"getProductListBySearch/"+searchKey;
    }
    static confirmOrder=this.URL+"order/";
    static productCreate=this.URL+"product/"
}

export default AppUrl;