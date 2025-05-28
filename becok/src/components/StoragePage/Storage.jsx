import { useState } from "react";
import Mark from "../StoragePage/Mark";
import Alarm from "../StoragePage/Alarm";
import {
  Frame,
  Title,
  TabWrapper,
  Tab,
  ContentArea,
} from "../../styles/StoragePageStyle/Storage.style";

const Storage = () => {
  const [activeCategory, setActiveCategory] = useState("알림");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const memberId = localStorage.getItem("memberId");
  return (
    <Frame>
      <Title>보관함</Title>

      <TabWrapper>
        <Tab
          active={activeCategory === "알림"}
          onClick={() => handleCategoryChange("알림")}
        >
          알림
        </Tab>
        <Tab
          active={activeCategory === "찜"}
          onClick={() => handleCategoryChange("찜")}
        >
          찜
        </Tab>
      </TabWrapper>

      <ContentArea>
        {activeCategory === "알림" && <Alarm memberId={memberId} />}
        {activeCategory === "찜" && <Mark memberId={memberId} />}
      </ContentArea>
    </Frame>
  );
};

export default Storage;
