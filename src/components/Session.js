import React from "react";

export const Session = () => {


  return (
    <div className="container m-2 border border-warning-subtle pb-5 pt-2">
      <h2 className="text-center mb-5">Session Length</h2>
      <div className="row">
        <button className="btn btn-warning col ms-5">up</button>
        <p className="col text-center">5</p>
        <button className="col btn btn-warning me-5">down</button>
      </div>
    </div>
  );
};
