import React from 'react';
import {motion} from 'framer-motion';
import Documents from "../components/Documents/index";
import "../assets/css/portfolioPage.css";

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
         
            </main>
       
            </div>



            </motion.div>
        </>
    );
};

export default DocumentsListPage;