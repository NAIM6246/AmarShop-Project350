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




    /** url for fetching feature,collection,new arrival component */
    static getProductListByRemark(remark){
        return this.URL+"getProductListByRemark/"+remark;
    }

    /**url for fetching all the products of a category  by clicking any category */
    static getProductListByCategoryLevel1(category){
        return this.URL+"getProductListByCategoryLevel1/"+category;
    }   

    /**fetching all the products of a subcategory by clicking any subcategory from the menubar */
    static getProductListByCategoryLevel2(category1,category2){
        return this.URL+"getProductListByCategoryLevel2/"+category1+"/"+category2;
    }
     
    /**fetching any products details by clicking on the product */
    static getProductDetails(productCode){
        return this.URL+"getProductDetails/"+productCode;
    }
    
}

export default AppUrl;