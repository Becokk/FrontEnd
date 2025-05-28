import styled from "styled-components";

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow-y: auto;
`;

export const Title = styled.div`
  position: relative;
  margin-top: 110px;
  margin-left: 135px;
  font-size: min(64px, 3.33vw);
  font-weight: 500;
  font-family: "Pretendard-SemiBold", Helvetica;
  letter-spacing: -1.6px;
  line-height: 83.2px;
  color: #363636;
  white-space: nowrap;
`;

export const TabWrapper = styled.div`
  position: relative;
  margin-top: 51px;
  margin-left: 135px;
  display: flex;
  width: min(192px, 10vw);
  height: min(48px, 2.5vw);
`;

export const Tab = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: min(96px, 5vw);
  height: min(48px, 2.5vw);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: min(28px, 1.46vw);
  font-weight: ${(props) => (props.active ? 600 : 500)};
  color: ${(props) => (props.active ? "#2E65F3" : "#b4b4b4")};
  font-family: "Pretendard-Medium", Helvetica;
  letter-spacing: -0.7px;
  line-height: 33.6px;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #2e65f3;
  }

  ${(props) =>
    props.active &&
    `
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #2E65F3;
        }
    `}
`;

export const ContentArea = styled.div`
  position: relative;
  margin-top: 121px;
  margin-left: 162px;
  width: min(1270px, 66.15vw);
  height: min(667px, 34.74vw);
`;
