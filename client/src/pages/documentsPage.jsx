import React from 'react';
import {motion} from 'framer-motion';
import DocumentList from '../components/DocumentList';
import { DocumentProvider } from "../utils/DocumentContext";
import "../assets/css/portfolioPage.css";

const DocumentListPage = () => {

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
                <DocumentProvider>
                    <DocumentList/>
                </DocumentProvider>
            </main>
       
            </div>



            </motion.div>
        </>
    );
};

export default DocumentListPage;