import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBreak } from "../redux/reducers/clockSlice";

export const Break = () => {

  const dispatch = useDispatch();
  const breakTime = useSelector((state) => state.clock.break);

  return (
    <div id = 'break-label' className="container m-2 border border-danger-subtle pb-5 pt-2">
      <h2 className="text-center mb-5">Break Length</h2>
      <div className="row">
        <button onClick={()=>dispatch(handleBreak('increment'))} id='break-increment' className="col ms-5 btn btn-danger"><i className="bi bi-arrow-up"></i></button>
        <p id ='break-length' className="col text-center">{breakTime}</p>
        <button onClick={()=>dispatch(handleBreak('decrement'))} id='break-decrement' className="col me-5 btn btn-danger"><i className="bi bi-arrow-down"></i></button>
      </div>
    </div>
  );
};
