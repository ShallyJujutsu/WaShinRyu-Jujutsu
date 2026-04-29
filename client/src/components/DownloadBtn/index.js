import React from "react";
import "./style.css";


const DownloadBtn = props => {
    const downloadFile = () => {
      window.location.href = "../../assets/files/Shalom_Dawit_Resume.docx"
    }
    return (
              <button id="purple" onClick={downloadFile} />
    )
  }
  export default DownloadBtn;