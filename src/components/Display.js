import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInstace, handleMinutes, handlePause, handleReset, handleSeconds } from "../redux/reducers/clockSlice";

export const Display = () => {

  const dispatch = useDispatch();
  let minutes = useSelector((state) => state.clock.actual.minutes );
  let seconds = useSelector((state) => state.clock.actual.seconds );
  const pause = useSelector((state)=> state.clock.pause);
  const instance = useSelector((state)=> state.clock.instance);

  
  useEffect(()=>{

      let interval; 

      const timer = () => {
        let s = seconds;
        let m = minutes;

          s--;
          if(m <= 0 && s < 0){
            document.getElementById('beep').play();
            dispatch(handleInstace());
            clearInterval(interval);
          }else if(s < 0){
            s = 59;
            m--;
            dispatch(handleSeconds(s));
            dispatch(handleMinutes(m));
          }else{
            dispatch(handleSeconds(s));
        }
      }

    if(pause === false){
      clearInterval(interval);
      interval = setInterval(timer,1000);
    }else{
      clearInterval(interval);
    }

    return ()=>{clearInterval(interval);}

  },[pause,seconds,instance]);

const time = () =>{
  if(minutes < 10 && seconds < 10){
    return `0${minutes}:0${seconds}`;
  }else if(minutes < 10 && seconds >= 10){
    return `0${minutes}:${seconds}`; 
  }else if(minutes >= 10 && seconds < 10){
    return `${minutes}:0${seconds}`;
  }else{
    return `${minutes}:${seconds}`
  }
}

  return (
    <div  className="container border border-primary-subtle pb-5 pt-2">
        <h2 id='timer-label' className='text-center mb-5'>{instance}</h2>
      <div  className="row">
      <audio id="beep" src="https://raw.githack.com/anlach/sounds/main/chinese-gong-daniel_simon.mp3"/>
        <h2 id='time-left' className="text-center">{time()}</h2>
      </div>
      <div className="row">

        <button onClick={()=> dispatch(handlePause())} id='start_stop' className=" col btn btn-success col ms-5"><i className="bi bi-play-fill"></i><i className="bi bi-pause-fill"></i></button>
        <button onClick={()=> dispatch(handleReset())} id='reset' className="col btn btn-danger col me-5"><i className="bi bi-arrow-repeat"></i></button>
      </div>
    </div>
  );
};
