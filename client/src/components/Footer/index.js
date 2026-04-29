import React from "react";
import "./style.css";

function Footer() {
  return (
  
    <>
    <footer id="outer_footer" >
 
  <div className="row footerRow">
    
      <div className="col-lg-9  col-md-6 col-sm-6 col-xs-6"/>
    <div id="texting" className="col-lg-3 col-md-6 col-sm-6 col-xs-6"> Created By NEW DIGITAL WORLD</div>
    </div>
    <div className="row footerRow">
    <div className="col-lg-10 col-md-10 col-sm-10"/>
    <div id="image" className="col-lg-2 col-md-2 col-sm-2">
       <img  src={require("../../assets/img/favicon.ico")} alt={"juju"}/> 12/20
    </div>
    </div>
</footer>
</>
  );
}

export default Footer;
