import { useEffect, useState } from "react";
import { getPopularContests, getPopularPrograms } from "../apis/popular";

const usePopularCards = (category) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (category === "공모전") {
      getPopularContests()
        .then((res) => {
          if (res.isSuccess && res.data) {
            console.log("공모전 응답:", res);
            setCards(res.data);
          }
        })
        .catch((err) => console.error("공모전 불러오기 실패:", err));
    } else {
      getPopularPrograms()
        .then((res) => {
          if (res.isSuccess && res.data) {
            console.log("비교과 프로그램 응답:", res);
            setCards(res.data);
          }
        })
        .catch((err) => console.error("비교과 프로그램 불러오기 실패:", err));
    }
  }, [category]);

  return cards;
};

export default usePopularCards;
