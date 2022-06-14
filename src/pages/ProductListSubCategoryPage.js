import React, { Component ,Fragment} from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ListOfSubCategory from '../components/productDetails/ListOfSubCategory';
import AppUrl from '../restAPI/AppUrl';
import axios from 'axios';
class ProductListSubCategoryPage extends Component {

    
    constructor({match}) {
        super();
        this.state={
            category:match.params.category,
            Subcategory:match.params.Subcategory,
            Data:[]
        }
        
    }
    
    componentDidMount() {

        window.scroll(0,0)
        /**fetching productList item by clicking any subcategory from the menubar */
        axios.get(AppUrl.getProductListByCategoryLevel2(this.state.category,this.state.Subcategory)).then(response=>{
            if(response.status==200){
                let myData=(response.data);
                this.setState({Data:myData});
            }
        }).catch(error=>{
           
       });
    }
    
    render() {
        return (
            <Fragment>
            <div className="desktop">
                <NavMenuDesktop></NavMenuDesktop>
             </div>

             <div className="mobile">
                <NavMenuMobile></NavMenuMobile>
             </div>
               <div>
                 <ListOfSubCategory Data={this.state.Data}category={this.state.category} Subcategory={this.state.Subcategory}></ListOfSubCategory>
               </div>
               

             <div className="desktop">
                <FooterDesktop></FooterDesktop>
             </div>
             
             <div className="mobile">
                <FooterMobile></FooterMobile>
             </div>   
             
            </Fragment>
        );
    }
}

export default ProductListSubCategoryPage;