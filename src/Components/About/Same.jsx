import React from "react";

const Same = (props) => {
  return (
    <>
      <div className="mainsection">
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div className="img">
          <img src={props.imgsrc} alt="home" />
        </div>
      </div>
    </>
  );
};

export default Same;