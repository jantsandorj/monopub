import React from "react";

import move1 from "../image/image 12.png";
import move2 from "../image/row1.png";
import move3 from "../image/image 13.png";
import move4 from "../image/image 18.png";

const Bglogo = () => {
  return (
    <div className="flex flex-col gap-y-[35px] overflow-hidden">
      <div className="row flex gap-x-[20px] left-[-1000px] relative" id="row1">
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
      </div>
      <div className="row flex gap-x-[20px] left-[-300px] relative" id="row2">
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
      </div>
      <div className="row flex gap-x-[20px] left-0 relative" id="row3">
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move1} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move2} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move3} alt="move" className="w-full h-full" />
        </div>
        <div className="item">
          <img src={move4} alt="move" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Bglogo;
