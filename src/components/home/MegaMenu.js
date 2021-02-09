import React, { Component,Fragment } from 'react';
import axios from 'axios';
import AppUrl from '../../restAPI/AppUrl';
import { ToastContainer,toast } from 'react-toastify';
class MegaMenu extends Component {

    constructor(props) {
        super(props);

    }

    menuItemOnClick=(event)=>{
        event.target.classList.toggle("active");
        let panel=event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+ "px"
        }
    }


        render() {

            const MyList=this.props.Data;
    
            const view=MyList.map((MyList,i)=>{
                return <div key={i.toString()}>
                    <button onClick={this.menuItemOnClick} className="accordion"> <img className="accordionMenuIcon" src=""/>{MyList.$categoryLevel1Name}</button>
                    <div className="panel">
                        <ul>
                        {
                               (MyList.$categoryLevel2Name).map((secondCategory,i)=>{
                                    return <li><a href="#" className="accordionItem">{secondCategory.categoryLevel2Name}</a></li>
                               })
                           }
                        </ul>
                    </div>
    
                </div>
    
            })
       
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                  {view}
                </div>
            </div>
        );
    }
}

export default MegaMenu;