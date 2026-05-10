import React, { useEffect, useState } from "react";
import "./style.css";
import {  HashRouter as Router, Route, useLocation } from 'react-router-dom';
// import Ashis from "../Ashi";
// import { Button, Modal } from "reactstrap";
//import {useState} from 'react';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

// const Ashi = ()=> (<>{Ashis}</>);
// const components = {
//   ashi : Ashi
// };
// const Documents = () => {
//    // const [documents, setDocuments] = useContext(DocumentsContext)
//     return (
function Documents() {

  const [importedComponent, setImportedComponent] = useState(null);
        const location = useLocation();
     const find  = location.state;
   
  console.log(""+find);
    useEffect(() => {
   
      const importComponent = async () => {
        const module = await import('../'+find);
        const DocumentComponent = module.default;
        setImportedComponent(<DocumentComponent />);
      };
  
      importComponent();
    }, []);
  
  

//   const Ashi = ()=> (<><div>Ashis</div><div>Forget IT</div></>);
// const components = {
//   ashi : Ashi
// };
// function Documents({documentObject, documentModalOpen , documentModalClose}) {
   //  const location = useLocation();
   //   = location.state;
  // const componentName= "ashi";
  // const DocumentComponent = components[componentName];
//const [DeployURL2, setDeployURL2]= useState(deployURL);
// const DocumentComponent = fight;
//console.log(documentComponent);
 //console.log(fight);
  return( 
  <>
  
  {/* {DocumentComponent? <DocumentComponent/> : <div>Not HERE I guess</div>}
  {console.log(DocumentComponent)} */}
  

    <div>
        {importedComponent}
        <div>This is my NOT functional component!</div>
      </div>
  </>
);
};

export default Documents;