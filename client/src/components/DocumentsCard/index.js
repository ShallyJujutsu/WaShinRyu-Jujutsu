import React, {useState} from "react";
import "./style.css"
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const DocumentsCard = ({ name, descriptionShort, imageURL, deployURL, gitHubRepo, loginInfo, skills }) => {
//console.log(deployURL);
//const [fight,setFight] = useState(deployURL);
//setFight(deployURL);
//console.log(fight);
  return (
    <>
      {/* <div className="card z-depth-3"> */}
      <div className="card">
        {/* <a target="_blank" rel="noreferrer" href={deployURL}> */}
          <div className="card-image">
          {/* <a target="_blank" rel="noreferrer" href={deployURL}> */}
          <Link  to="/documents" state={deployURL} >
   
          <LazyLoad offsetVertical={1000} onContentVisible={false}>
            <img className="portfolio-img" alt="holding pattern" src={imageURL} ></img>
            </LazyLoad>
            <div className="overlay">
              <div className="text">{name}</div>
            </div>
            </Link>
          </div>
        {/* </a> */}
        {/* <div className="overlay"><div className="text">{name}</div></div> */}
        <a target="_blank" rel="noreferrer" href={gitHubRepo}>
          {/* <span className="gitHub">GitHub Repo:</span> */}
          <span className="card-title"> {name}</span>
          </a>

        <div className="card-info">
          <p id="projDescr">({descriptionShort})</p>
          <span> </span><p id="skills">{skills}</p>
          <p id="login_info">{loginInfo}</p>
        </div>

        <div className="card-action">


        </div>

      </div>
      <br /><br />
    </>
  )

};

export default DocumentsCard;