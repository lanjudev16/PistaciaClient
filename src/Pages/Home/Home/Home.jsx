import React, { useEffect } from "react";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../Gallery/Gallery";
AOS.init();
const Home = () => {
    useEffect(()=>{
        document.title="Home | Disney dolls"
    },[])
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
