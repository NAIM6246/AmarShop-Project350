import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import UserOnboard from '../components/common/UserOnboard';

class UserOnboardPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            id:"null"
        }
    }
    

    componentDidMount() {
        window.scroll(0,0)
        const{id}=this.props.location.state;
        this.setState({id:id})
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
               <UserOnboard id={this.state.id}></UserOnboard>
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

export default UserOnboardPage;