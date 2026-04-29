import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import { Link } from 'react-router-dom';
// import { Link } from '../../../../node_modules/react';
import ScrollToTop from "../ScrollToTop/index.js";
import './style.css'

// const toolbar = props => (
    
//      <nav className="toolbar navbar">
//          {/* <nav className="toolbar_navigation"> */}
//             <div className="toolbar_toggle-button">
//                 <DrawerToggleButton click={props.drawerClickHandler} />
//             </div>
//             {/* <div className="toolbar__logo"> */}
        
//                 <h2>Shalom Dawit</h2>
//             {/* </div> */}
//             {/* <div className="spacer" /> */}
            
//                <form id="navForm">
//             <ScrollToTop />
//                     <Link id="red" to="/main" >ABOUT</Link>   
                 
//                     <Link id="green" to="/portfolio">PORTFOLIO</Link>
                   
//                     <Link id="blue" to="/contact">CONTACT</Link>
                 
//                 </form>
           
//         </nav>
  
// )

// export default toolbar;


function Toolbar (props) {
    return (
    <nav className="toolbar navbar">
        {/* <nav className="toolbar_navigation"> */}
           <div className="toolbar_toggle-button">
               <DrawerToggleButton click={props.drawerClickHandler} />
           </div>
           {/* <div className="toolbar__logo"> */}
       
               <h2>Shalom Dawit</h2>
           {/* </div> */}
           {/* <div className="spacer" /> */}
           
              <form id="navForm">
           <ScrollToTop />
                   <Link id="red" to="/main" >ABOUT</Link>   
                
                   <Link id="green" to="/portfolio">PORTFOLIO</Link>
                  
                   <Link id="blue" to="/contact">CONTACT</Link>
                
               </form>
          
       </nav>
    );
}

export default Toolbar;