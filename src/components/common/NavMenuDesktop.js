import React, { Component } from 'react';
import { Fragment } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';



class NavMenuDesktop extends Component {

    constructor(props) {
        super(props);
        this.state={
            searchKey:"",
            redirect:false 
        }
    }

    searchOnChange=(event)=>{
        let searchKey=event.target.value;
        this.setState({searchKey:searchKey})
        
    }
    searchOnClick=()=>{
        if(this.state.searchKey.length>=2){
            this.setState({redirect:true})
            
        }
    }

    searchRedirect=()=>{
        if(this.state.redirect===true){
            this.setState({redirect:false})
            return <Redirect to={"/searchProductList/"+this.state.searchKey}/>
        }
    }
    onLogoutClick=()=>{
        this.setState({redirect:true})
        sessionStorage.removeItem('userName')
    }
    onLogoutRedirect=()=>{
        if(this.state.redirect===true){
            this.setState({redirect:false})
            return <Redirect to="/"/>
        }
    }
    render() {

        if(sessionStorage.getItem('userName')===null){
            return (
                <Fragment>
                     
                     <Navbar fixed={"top"} bg="light" className="navbar">
                    
                     <Container>
                         <Row>
                             <Col lg={6} md={6} sm={12} xs={12} >
                             <div className="input-group w-100">
                             <a href="/" className="btn"><img className="nav-logo" src="images/category1.jpg"></img></a> 
                                <Button className="cart-btn"> <i className="fa fa-shopping-cart"></i>items</Button>  
                            </div>
                             </Col>
                             <Col lg={3} md={3} sm={12} xs={12} >
                                 <div className="input-group w-100 center">
                                     <input onChange={this.searchOnChange}type="text" className="form-control" aria-label="Text input with segmented dropdown button"></input>
                                     <Button onClick={this.searchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                                 </div>
                             </Col>
                             <Col lg={3} md={3} sm={12} xs={12} >
                                {/* <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span></sup></Link>*/}
                                 <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span></sup></Link>
                                {/* <a className="btn"><i className="fa h4 fa-mobile-alt"></i><sup><span className="badge bg-danger"></span></sup></a>*/}
                                 <Link to="/onboard" className="h4 btn">LOGIN</Link>
                                 
                             </Col>
                             
                         </Row>
    
                         {this.searchRedirect()}
                         {this.onLogoutRedirect()}
                     </Container>
                     </Navbar>
                </Fragment>
            );
        }
        else{
        return (
            <Fragment>
                 
                 <Navbar fixed={"top"} bg="light" className="navbar">
                
                 <Container>
                     <Row>
                         <Col lg={6} md={6} sm={12} xs={12} >
                         <div className="input-group w-100">
                         <a href="#" className="btn"><img className="nav-logo" src="images/category1.jpg"></img></a> 
                            <Button className="cart-btn"> <i className="fa fa-shopping-cart"></i>items</Button>  
                        </div>
                         </Col>
                         <Col lg={3} md={3} sm={12} xs={12} >
                             <div className="input-group w-100 center">
                                 <input onChange={this.searchOnChange}type="text" className="form-control" aria-label="Text input with segmented dropdown button"></input>
                                 <Button onClick={this.searchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                             </div>
                         </Col>
                         <Col lg={3} md={3} sm={12} xs={12} >
                            {/* <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span></sup></Link>*/}
                             <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span></sup></Link>
                            {/* <a className="btn"><i className="fa h4 fa-mobile-alt"></i><sup><span className="badge bg-danger"></span></sup></a>*/}
                             <p onClick={this.onLogoutClick}className="h4 btn">LogOut</p>
                             
                         </Col>
                         
                     </Row>

                     {this.searchRedirect()}
                 </Container>
                 </Navbar>
            </Fragment>
        );
        }
    }
}

export default NavMenuDesktop;