import React from "react";

function Alert(props) {   // props.type = "danger"
  console.log(props);

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Alert;
