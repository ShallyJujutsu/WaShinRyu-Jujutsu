import React from "react";


const SkillIcon = ({ name, iconUrl }) => {
    return (
        <img alt={name} src={iconUrl} className="skillsIcon" />
    )
};

export default SkillIcon;