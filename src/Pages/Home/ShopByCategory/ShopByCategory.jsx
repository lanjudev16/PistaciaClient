import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCatCardItem from "./ShopCatCardItem";
import './style.css'
const ShopByCategory = () => {
  const [catDolls, setCatDolls] = useState([]);
  useEffect(() => {
    fetch("https://server-vert-three.vercel.app/allToyData")
      .then((res) => res.json())
      .then((data) => setCatDolls(data));
  }, []);
  return (
    <div className="my-5 " data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <h1 className="text-2xl text-center lg:mt-14  lg:mx-0 my-5">Shop by category</h1>
      <Tabs className="mb-14">
        <TabList className="text-center">
          <Tab>Disney princes</Tab>
          <Tab>Frozen dolls</Tab>
          <Tab>Animation characters</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5 mx-5 lg:mx-0">
               { catDolls
                .filter((item) => item.SubCategory == 'Disney princes')
                .map((item) => (
                  <ShopCatCardItem key={item._id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-4 mt-5 mx-5 lg:mx-0">
              {catDolls
                .filter((item) => item.SubCategory == 'Frozen dolls')
                .map((item) => (
                  <ShopCatCardItem key={item._id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-4 mt-5 mx-5 lg:mx-0">
              {catDolls
                .filter((item) => item.SubCategory == 'Animation characters')
                .map((item) => (
                  <ShopCatCardItem key={item._id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
