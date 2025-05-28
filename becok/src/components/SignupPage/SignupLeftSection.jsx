import React from "react";
import CharacterImage from "../../assets/becokPeople.png";
import BottomLineImage from "../../assets/line.png";
import {
  LeftSection,
  GlobalStyle,
  Grop1,
  Title,
  Subtitle,
  Character,
  BottomLine,
} from "../../styles/SignupPage/SignupLeftSection.style";

const SignupLeftSection = () => {
  return (
    <LeftSection>
      <GlobalStyle />
      <Grop1>
        <Title>똑똑한 비교과 포인트 관리는, 비콕</Title>
        <Subtitle>
          비교과 프로그램 알림 뿐만 아니라, <br />
          교내/외 프로그램까지 책임지는 든든한 친구가 되어 드릴게요.
        </Subtitle>
      </Grop1>
      <Character src={CharacterImage} alt="비콕 캐릭터" />
      <BottomLine src={BottomLineImage} alt="하단 구분선" />
    </LeftSection>
  );
};

export default SignupLeftSection;
