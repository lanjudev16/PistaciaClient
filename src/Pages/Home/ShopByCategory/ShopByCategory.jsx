import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCatCardItem from "./ShopCatCardItem";

const ShopByCategory = () => {
  const [catDolls, setCatDolls] = useState([]);
  useEffect(() => {
    fetch("dataCat.json")
      .then((res) => res.json())
      .then((data) => setCatDolls(data));
  }, []);
  return (
    <div className="my-5">
      <h1 className="text-2xl text-center my-5">Shop by category</h1>
      <Tabs>
        <TabList>
          <Tab>Disney princes</Tab>
          <Tab>Frozen dolls</Tab>
          <Tab>Animation characters</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
              {catDolls
                .filter((item) => item.SubCat.catId == 1)
                .map((item) => (
                  <ShopCatCardItem key={item.id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
              {catDolls
                .filter((item) => item.SubCat.catId == 2)
                .map((item) => (
                  <ShopCatCardItem key={item.id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
              {catDolls
                .filter((item) => item.SubCat.catId == 3)
                .map((item) => (
                  <ShopCatCardItem key={item.id} item={item}></ShopCatCardItem>
                ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
