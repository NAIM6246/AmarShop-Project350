import React, { Component } from 'react';

class MegaMenu extends Component {

    constructor(props) {
         super(props);
         this.MegaMenu=this.MegaMenu.bind(this);
        
    }
    componentDidMount() {
        this.MegaMenu();
    }
    MegaMenu(){
        var acc=document.getElementsByClassName("accordion");
        var accNum=acc.length;
        var i;
        for(i=0;i<accNum;i++){
            acc[i].addEventListener("click",function(){
                this.classList.toggle("active");
                var panel=this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight=null;
                }
                else{
                    panel.style.maxHeight=panel.scrollHeight+ "px";
                }
            })
        }
        
    }
    
    
    render() {
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                         <button className="accordion"><img className="accordionMenuIcon" src="images/tshirt.87175310.svg"></img>Mens's Clothing</button>
                         <div className="panel">
                             <ul>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                                 <li><a href="#" className="accordionItem">Man Shirt</a></li>
                             </ul>
                         </div>
                </div>
                
            </div>
        );
    }
}

export default MegaMenu;