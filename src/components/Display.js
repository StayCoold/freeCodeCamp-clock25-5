import React from "react";

export const Display = () => {

  return (
    <div className="container border border-primary-subtle pb-5 pt-2">
        <h2 className='text-center' mb-5>Session</h2>
      <div className="row">
        <h2 className="text-center">25</h2>
      </div>
      <div className="row">
        <button className=" col btn btn-success col ms-5">Start/Stop</button>
        <button className="col btn btn-danger col me-5">Reset</button>
      </div>
    </div>
  );
};
