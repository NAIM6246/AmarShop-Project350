import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Address from '../components/productDetails/Address';
class AddressPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            id:"",
            quantity:"",
            size:"",
            price:""
        }
    }
    

    componentDidMount(){
        window.scroll(0,0)
        const {size}=this.props.location.state;
        const{quantity}=this.props.location.state;
        const{id}=this.props.location.state;
        const {price}=this.props.location.state;
        this.setState({id:id,size:size,quantity:quantity,price:price})
        
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
                <Address id={this.state.id} quantity={this.state.quantity} size={this.state.size} price={this.state.price}></Address>
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

export default AddressPage;