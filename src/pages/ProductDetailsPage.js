import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ProductDetails from '../components/productDetails/ProductDetails';
import SuggestedProduct from '../components/productDetails/SuggestedProduct';
import AppUrl from '../restAPI/AppUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
class ProductDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            productCode:match.params.productCode,
            Data:{},
            id:"",
            title:"",
            imgage:"",
            description:"",
            price:"",
            color:"",
            size:"",
            ammount:""
        }
        
    }
    
    componentDidMount() {

        window.scroll(0,0)
        axios.get(AppUrl.getProductDetails(this.state.productCode)).then(response=>{
            
            if(response.status==200){
                let myData=(response.data);

                this.setState({Data:myData});
                this.setState({id:response.data[0]['id']})
                this.setState({title:response.data[0]['productName']})
                this.setState({imgage:response.data[0]['imgage']})
                this.setState({description:response.data[0]['details']})
                this.setState({price:response.data[0]['price']})
                this.setState({color:response.data[0]['color']})
                this.setState({size:response.data[0]['size']})
                this.setState({ammount:response.data[0]['ammount']})
                toast(myData.id)

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
                  <ProductDetails price={this.state.price} ammount={this.state.ammount} title={this.state.title} imgage={this.state.imgage} description={this.state.description} color={this.state.color}  size={this.state.size} Data={this.state.Data} productCode={this.state.productCode}></ProductDetails>
                  <SuggestedProduct></SuggestedProduct>
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

export default ProductDetailsPage;