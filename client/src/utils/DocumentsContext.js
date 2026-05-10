import React, {useState, createContext} from "react";


export const DocumentsContext = createContext()

export const DocumentsProvider = props => {

    const [documents, setDocuments] = useState([
        

        {
            
            name: "Ashi No Kata",
             descriptionShort: "Techniques of the Russo Ashi Gatame No Kata",
            imageURL: require("../assets/img/contextPics/ankle1.jpg"),
           deployURL: "Ashi",
            skills: "1",
            id: 1
        },
        {
            
            // name: "",
            // descriptionShort: "",
             imageURL: require("../assets/img/contextPics/ankle2.jpg"),
             deployURL:"AnotherComponent",
            //skills: "",
             id: 2
        }
       

 

]); 

    return(
        <DocumentsContext.Provider value={[documents, setDocuments]}>
            {props.children}
        </DocumentsContext.Provider>

);

}
