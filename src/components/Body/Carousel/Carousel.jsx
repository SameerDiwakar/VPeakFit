import React from "react";
import VPEAK_Video from "./video/VPEAK_Video.mp4";

const Carousel = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={VPEAK_Video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
    </div>
  );
};

export default Carousel;
