import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import SearchList from '../components/productDetails/SearchList';
import AppUrl from '../restAPI/AppUrl';
import axios from 'axios';
class SearchPage extends Component {

    constructor({match}) {
        super();
        this.state={
            searchKey:match.params.searchKey,
            Data:[]
        }
        
    }
    
    componentDidMount() {
       
        /*fetching search result  item by clicking the search button */
        window.scroll(0,0)
        axios.get(AppUrl.getProductListBySearch(this.state.searchKey)).then(response=>{
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
               <SearchList Data={this.state.Data} searchKey={this.state.searchKey}></SearchList>
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

export default SearchPage;