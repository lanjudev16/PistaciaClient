import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCatCardItem from "./ShopCatCardItem";

const ShopByCategory = () => {
  const [catDolls, setCatDolls] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToyData")
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
      <h1 className="text-2xl text-center my-5">Shop by category</h1>
      <Tabs>
        <TabList>
          <Tab>Disney princes</Tab>
          <Tab>Frozen dolls</Tab>
          <Tab>Animation characters</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
               { catDolls
                .filter((item) => item.SubCategory == 'Disney princes')
                .map((item) => (
                  <ShopCatCardItem key={item._id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
              {catDolls
                .filter((item) => item.SubCategory == 'Frozen dolls')
                .map((item) => (
                  <ShopCatCardItem key={item._id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
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
