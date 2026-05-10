import React from 'react';
import {motion} from 'framer-motion';
// import DocumentsList from '../components/DocumentsList';
// import { DocumentsProvider } from "../utils/DocumentsContext";
import Documents from "../components/Documents/index";
import "../assets/css/portfolioPage.css";
import DocTEST from '../components/DocTEST';
import { useLocation } from "react-router-dom";
const DocumentsListPage = () => {

//console.log(deployURL);
    return (

        <>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }}> 
        <div className="bod">
        <main className="col-xs-12 col-lg-10">
        <h1>Documents</h1>
    
                <Documents/>
            {/* <DocTEST/> */}
            </main>
       
            </div>



            </motion.div>
        </>
    );
};

export default DocumentsListPage;