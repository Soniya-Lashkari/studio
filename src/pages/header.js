import React from "react";
import"./Header.css";
import image from "../images/vividbloc.studio.png"
export const header = () => {
  return (<>
  <div className="head">
    <img src={image}/>
  </div>
  </>
  );
}
export default header;
