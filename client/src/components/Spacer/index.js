import React, { useEffect, useState, useCallback } from "react";
import "./style.css";

function Spacer() {


  // const [backgroundColor, setBackgroundColor] = useState("");
  // const [borderRadius, setBorderRadius] = useState("");

  // const listenMouseMove = useCallback(
  //   ({ clientX }) => {


  //   if (clientX > 200 && clientX < 900){
  //     setBackgroundColor("linear-gradient(to bottom, black, purple, violet, purple, black, black");
  //     setBorderRadius("50%");
  //   }
  //   else {
  //     setBackgroundColor("");
  //     setBorderRadius("");
  //   }
  //   },
  //   []
  // );

  // useEffect(() => {
  //   window.addEventListener("mousemove", listenMouseMove);

  // });

  return (
//change style to className or id to keep css on stylesheet  
    <>
      <div id="outer_spacer" 
      // style={{ background: backgroundColor, borderRadius:borderRadius }}
      >
      
        <div id="globe">
          <img id="globe_spacer"
            src={require("../../assets/img/globe3.png")} alt={"spacer"} />
            {/* <div className="centered">DREAM BIG...DREAM BIG...</div> */}
        </div>
 
        <img id="image_spacer" src={require("../../assets/img/spacer.jpg")} alt={"spacer"} />

      </div>

    </>
  );
}

export default Spacer;
