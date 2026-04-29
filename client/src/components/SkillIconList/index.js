import React, {  useContext } from "react";
import SkillIcon from "../SkillIcon";
import { SkillIconContext } from "../../utils/IconContext"
import "./style.css"

const SkillIconList = () => {
const [skillIcons] = useContext(SkillIconContext)

return(
    
    skillIcons.map((skillIcon) => {
    console.log(`skillIcon is = ${skillIcon.id}`)
    return (
  
            <SkillIcon name={skillIcon.name} iconUrl={skillIcon.localAddress}  key={skillIcon.id}  style={{display: "flex"}}/>
       
        
    )})

 )}

    export default SkillIconList;