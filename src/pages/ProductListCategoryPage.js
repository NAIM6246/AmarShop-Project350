import axios from 'axios';
import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ListOfCategory from '../components/productDetails/ListOfCategory';
import AppUrl from '../restAPI/AppUrl';

class ProductListCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            category:match.params.category,
            Data:[]
        }
        
    }
    
    componentDidMount() {
       
        /*fetching productList item by clicking any category */
        window.scroll(0,0)
        axios.get(AppUrl.getProductListByCategoryLevel1(this.state.category)).then(response=>{
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
                  <ListOfCategory Data={this.state.Data} category={this.state.category}></ListOfCategory>
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

export default ProductListCategoryPage;