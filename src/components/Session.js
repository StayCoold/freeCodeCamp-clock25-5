import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSession } from "../redux/reducers/clockSlice";

export const Session = () => {

  const sessionTime = useSelector((state) => state.clock.session);
  const dispatch = useDispatch();

  return (
    <div id='session-label' className="container m-2 border border-warning-subtle pb-5 pt-2">
      <h2 className="text-center mb-5">Session Length</h2>
      <div className="row">
        <button onClick={()=>dispatch(handleSession('increment'))} id='session-increment' className="btn btn-warning col ms-5"><i className="bi bi-arrow-up"></i></button>
        <p id='session-length' className="col text-center">{sessionTime}</p>
        <button onClick={()=>dispatch(handleSession('decrement'))} id='session-decrement' className="col btn btn-warning me-5"><i className="bi bi-arrow-down"></i></button>
      </div>
    </div>
  );
};
