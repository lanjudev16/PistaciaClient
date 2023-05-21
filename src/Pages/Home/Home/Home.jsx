import React, { useEffect } from "react";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../Gallery/Gallery";
import ExtraSection from "../ExtraSection/ExtraSection";
import Exclusive from "../Exclusive/Exclusive";
AOS.init();
const Home = () => {
    useEffect(()=>{
        document.title="Home | Disney dolls"
    },[])
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Exclusive></Exclusive>
    </div>
  );
};

export default Home;
