import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Collection from '../components/home/Collection';
import Categories from '../components/home/Categories';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';



class HomePage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
       
            <Fragment>
             <div className="desktop">
                <NavMenuDesktop></NavMenuDesktop>
                <HomeTop></HomeTop>
             </div>

             <div className="mobile">
             <NavMenuMobile></NavMenuMobile>
             <HomeTopMobile></HomeTopMobile>
             </div>
             
             <FeaturedProducts></FeaturedProducts>
             <NewArrival></NewArrival>
             <Collection></Collection>
             <Categories></Categories>

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

export default HomePage;