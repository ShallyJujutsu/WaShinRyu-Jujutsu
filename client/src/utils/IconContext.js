import React, { useState, createContext } from "react";


export const SkillIconContext = createContext()

export const SkillIconProvider = props => {

    const [skillIcons, setskillIcons] = useState([

 
        // {
        //     name: "javascript",
        //     localAddress: require("../assets/img/JS.png"),
        //     id: 3
        // },

        // {
        //     name: "mysql",
        //     localAddress: require("../assets/img/MySQL.jpg"),
        //     id: 5
        // },

        // {
        //     name: "mongodb",
        //     localAddress: require("../assets/img/mongodb.png"),
        //     id: 6
        // },

        // {
        //     name: "react",
        //     localAddress: require("../assets/img/React.png"),
        //     id: 7
        // },

        // {
        //     name: "mern",
        //     localAddress: require("../assets/img/mern.jpg"),
        //     id: 8
        // },




    ]);
    return (
        <SkillIconContext.Provider value={[skillIcons, setskillIcons]}>
            {props.children}
        </SkillIconContext.Provider>

    );
}