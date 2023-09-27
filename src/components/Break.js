import React from "react";

export const Break = () => {


  return (
    <div className="container m-2 border border-danger-subtle pb-5 pt-2">
      <h2 className="text-center mb-5">Break Length</h2>
      <div className="row">
        <button className="col ms-5 btn btn-danger">up</button>
        <p className="col text-center">5</p>
        <button className="col me-5 btn btn-danger">down</button>
      </div>
    </div>
  );
};
