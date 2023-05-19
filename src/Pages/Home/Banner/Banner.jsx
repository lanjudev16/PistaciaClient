import React from "react";
import dollBanner from "../../../assets/images/dolls/dollsBanner.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dollBanner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[80vh] flex items-center"
    >
      <div>
        <h1 className="ml-5 text-3xl ">Dolls</h1>
        <h1 className="ml-5">It's endless possibilities with these dolls</h1>
      </div>
    </div>
  );
};

export default Banner;
