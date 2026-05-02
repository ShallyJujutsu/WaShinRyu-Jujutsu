import React, {useState, createContext} from "react";


export const ProjectContext = createContext()

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        

        {
            
            // name: "Google-Books",
            // descriptionShort: "A REACT app saving your library of books to buy or find info on",
            // gitHubRepo:"https://github.com/MrDawit/Google-Books",
            // deployURL:"https://google-books-hmwk.herokuapp.com/",
            // skills: "React, CSS, REST API, MERN-stack, MongoDB, Mongoose, Node, Axios, Bootstrap",
            // id: 7
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
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}
