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
            
            // name: "Code Quiz: Basketball (Laker's Edition!)",
            // descriptionShort: "Quiz/Tribute App for Kobe 'Bean' Bryant",
             imageURL: require("../assets/img/contextPics/ankle2.jpg"),
            // gitHubRepo:"https://github.com/MrDawit/Code-Quiz",
             deployURL:"AnotherComponent",
            //skills: "HTML, CSS, JQuery, Javascript, Localstorage API, Bootstrap, DOM, Moment library",
             id: 2
        }
       

 

]); 

    return(
        <DocumentsContext.Provider value={[documents, setDocuments]}>
            {props.children}
        </DocumentsContext.Provider>

);

}
