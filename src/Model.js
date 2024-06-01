import React from "react";
const Model = ({ isVisable, errormassage=null }) => {
  if (isVisable) {
    return (
      <div className="model">
        <div className="model-content">
          <h1 style={{color: errormassage ? "red" : "green"}}> 
            {errormassage != null ? errormassage : "The Form Has Been Submitted Scussafull"}
          </h1>
        </div>
      </div>
    );
  }else{
    return(<></>)
  }
};

export default Model;
