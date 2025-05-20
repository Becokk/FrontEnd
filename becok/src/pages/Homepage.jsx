import React, { useState } from "react";
import HomeHeader from "../components/Homepage/HomeHeader";
import Dropdown from "../components/Homepage/Dropdown";
import Card from "../components/Homepage/Card";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("비교과 프로그램");

  return (
    <div>
      <HomeHeader />
      <Dropdown setCategory={setSelectedCategory} />
      <Card category={selectedCategory} />
    </div>
  );
};

export default Homepage;
