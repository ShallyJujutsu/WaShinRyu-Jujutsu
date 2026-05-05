import React, {  useContext } from "react";
import DocumentCard from "../DocumentCard";
import { DocumentContext } from "../../utils/DocumentContext"

const DocumentList = () => {
    const [documents, setdocuments] = useContext(DocumentContext)
    return (
        <div className="container">
            <div className="row">
                {documents.map(kata => (
                   
                     <div className="col-sm-12 col-md-6 " key={document.id}>
                        <DocumentCard name={document.name} imageURL={document.imageURL} descriptionShort={document.descriptionShort} deployURL={document.deployURL}  skills ={document.skills}/>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default DocumentList;