import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from 'react-router-dom';

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

  return( 
  <>


    <div>
        {importedComponent}
        <div>This is my NOT functional component!</div>
      </div>
  </>
);
};

export default Documents;