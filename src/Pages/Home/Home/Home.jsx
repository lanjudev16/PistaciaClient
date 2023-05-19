import React, { useEffect } from "react";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
    useEffect(()=>{
        document.title="Home | Disney dolls"
    },[])
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="h-[50vh] bg-slate-500"
      ></div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        aspernatur ratione ab unde dolores. Expedita itaque suscipit similique
        debitis quas quasi. Corporis ut, natus omnis nihil sapiente eum officia
        sed. Nisi magnam nesciunt dignissimos fugit, autem nulla, optio cumque
        magni vel reprehenderit aliquid maiores necessitatibus libero rem non
        quas distinctio, perspiciatis voluptatibus at perferendis illum vero
        esse doloribus? Dolor voluptas impedit illum sequi explicabo facere non
        ducimus quo eligendi. Eius minima iusto in id. Corrupti error doloremque
        ea consequatur fuga laboriosam iste, facere aliquid vitae, dolorem,
        repudiandae nemo. Voluptatibus rem nemo voluptates officia qui
        consectetur, optio repellendus cumque commodi aliquid magni maxime
        possimus, natus expedita atque, nobis veritatis cum! Modi rerum optio
        nesciunt, fugit vero minus odio ab esse in illo cumque ullam debitis rem
        nihil fuga aspernatur. Cupiditate quos, id nisi, excepturi harum aliquid
        quam ea, alias tempora est animi blanditiis velit incidunt! Velit
        cupiditate nulla omnis consequuntur nesciunt a error accusantium
        recusandae doloribus, veritatis ipsum labore amet, fugit impedit quidem
        sint voluptates facere, ratione debitis culpa minima officia dolore et
        doloremque! Ratione perferendis inventore error animi perspiciatis
        voluptatibus tempore similique aliquid architecto. Dicta ex suscipit
        consectetur quasi recusandae? Labore id corporis deserunt natus
        accusamus placeat facilis, cum qui?
      </div>
    </div>
  );
};

export default Home;
