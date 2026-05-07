import React, {useState, createContext} from "react";


export const DocumentContext = createContext()

export const DocumentProvider = props => {

    const [documents, setDocuments] = useState([
        

        {
            
            name: "Ashi No Kata",
             descriptionShort: "Techniques of the Russo Ashi Gatame No Kata",
            // deployURL:"https://google-books-hmwk.herokuapp.com/",
           // deployUrl: require(<ashi/>),
            skills: "1",
            id: 1
        },
        {
            
            // name: "Code Quiz: Basketball (Laker's Edition!)",
            // descriptionShort: "Quiz/Tribute App for Kobe 'Bean' Bryant",
            // imageURL: require("../assets/img/Code_Quiz.png"),
            // gitHubRepo:"https://github.com/MrDawit/Code-Quiz",
            // deployURL:"https://mrdawit.github.io/Code-Quiz/index.html",
            // skills: "HTML, CSS, JQuery, Javascript, Localstorage API, Bootstrap, DOM, Moment library",
            // id: 8
        }
       

 

]); 

    return(
        <DocumentContext.Provider value={[documents, setDocuments]}>
            {props.children}
        </DocumentContext.Provider>

);

}
