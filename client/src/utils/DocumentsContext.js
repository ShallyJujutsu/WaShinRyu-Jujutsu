import React, {useState, createContext} from "react";


export const DocumentsContext = createContext()

export const DocumentsProvider = props => {

    const [documents, setDocuments] = useState([
        

        {
            
            name: "Ashi No Kata",
             descriptionShort: "Techniques of the Russo Ashi Gatame No Kata",
            imageURL: require("../assets/img/contextPics/ankle1.jpg"),
           deployURL: "Ashi",
            //skills: "",
            id: 1
        },
        {
            
             name: "IKKYO NO KATA A: Attack (Kogeki) Combinations (Renraku)",
             descriptionShort: "Attack Combinations Kata for Distance Fighting",
             imageURL: require("../assets/img/contextPics/ankle2.jpg"),
             deployURL:"AttackCombos",
            //skills: "",
             id: 2
        },
        {

            name:"IKKYO NO KATA B",
            descriptionShort:"Framework to the First Set of Principles - Distance Fighting",
            imageURL: require("../assets/img/archivedPics/hillock.gif"),
            deployURL:"IkkyoNoKata",
            //skills:"",
            id:3
        },
        {
            name:"Jigoku No Kata",
            descriptionShort: "Jigoku No Kata",
            imageURL: require("../assets/img/contextPics/jigoku.jpg"),
            deployURL: "JigokuNoKata",
            //skills:"",
            id:4
        },
          {
            name:"Nage No Kata (1)",
            descriptionShort: "Nikyo No Kata A (Omote Version)",
            imageURL: require("../assets/img/contextPics/Throw1.jpg"),
            deployURL: "NageNoKata1",
            //skills:"",
            id:5
        },
         {
            name:"Nage No Kata (2)",
            descriptionShort: "Ura or Combat Version: Throws From The Clinch Position",
            imageURL: require("../assets/img/contextPics/Throw2.jpg"),
            deployURL: "NageNoKata2",
            //skills:"",
            id:6
        },

 

]); 

    return(
        <DocumentsContext.Provider value={[documents, setDocuments]}>
            {props.children}
        </DocumentsContext.Provider>

);

}
