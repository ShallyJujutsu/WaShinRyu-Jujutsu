import React from "react";
import "./style.css";
import { useLocation } from 'react-router-dom';
import Ashi from "../Ashi";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

// const Documents = () => {
//    // const [documents, setDocuments] = useContext(DocumentsContext)
//     return (

function Documents() {
    const location = useLocation();
  const data = location.state;
  return (

      <>
    <div >
      <div>
       
<Ashi/>

      </div>
      </div>
    </>
  );
}

export default Documents;