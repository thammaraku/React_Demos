import React from "react";
import "./style.css";

// use props.children to load all the cards between wrapper tag under app.js instead of putting all the cards

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
