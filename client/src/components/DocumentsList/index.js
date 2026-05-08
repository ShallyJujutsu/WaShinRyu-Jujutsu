import React, {  useContext } from "react";
import DocumentsCard from "../DocumentsCard";
import { DocumentsContext } from "../../utils/DocumentsContext"

const DocumentsList = () => {
    const [documents, setDocuments] = useContext(DocumentsContext)
    return (
        <div className="container">
            <div className="row">
                {documents.map(documents => (
                   
                     <div className="col-sm-12 col-md-6 " key={documents.id}>
                        <DocumentsCard name={documents.name} imageURL={documents.imageURL} descriptionShort={documents.descriptionShort} deployURL={documents.deployURL}  skills ={documents.skills}/>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default DocumentsList;