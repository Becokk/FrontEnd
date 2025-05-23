import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import becokLogo from "../../assets/becok.png";
import homeIcon from "../../assets/home.png";
import planIcon from "../../assets/plan.png";
import homestorageIcon from "../../assets/homestorage.png";
import LogoutModal from "./LogoutModal";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = React.useState("홈");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const pathMap = {
      홈: "/main",
      플랜: "/main/plan",
      보관함: "/main/remember",
    };
    navigate(pathMap[menu]);
  };

  return (
    <SidebarContainer>
      <TopSection>
        <Logo src={becokLogo} alt="becok 로고" />
        <Menu>
          <MenuItem
            className={activeMenu === "홈" ? "active" : ""}
            onClick={() => handleMenuClick("홈")}
          >
            <IconWrapper>
              <MenuIcon src={homeIcon} alt="홈" />홈
            </IconWrapper>
          </MenuItem>
          <MenuItem
            className={activeMenu === "플랜" ? "active" : ""}
            onClick={() => handleMenuClick("플랜")}
          >
            <IconWrapper>
              <MenuIcon src={planIcon} alt="플랜" />
              플랜
            </IconWrapper>
          </MenuItem>
          <MenuItem
            className={activeMenu === "보관함" ? "active" : ""}
            onClick={() => handleMenuClick("보관함")}
          >
            <IconWrapper>
              <MenuIcon src={homestorageIcon} alt="보관함" />
              보관함
            </IconWrapper>
          </MenuItem>
        </Menu>
      </TopSection>
      <BottomSection>
        <Hr />
        <LogoutButton onClick={() => setIsModalOpen(true)}>
          <MenuIcon src={require("../../assets/Logout.png")} alt="로그아웃" />
          로그아웃
        </LogoutButton>
      </BottomSection>
      {isModalOpen && <LogoutModal onClose={() => setIsModalOpen(false)} />}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 16.98vw; /* 326 / 1920 ≈ 16.98 */
  height: 100vh;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f1f1f4;
  padding: 2rem 1.5rem;
  min-width: 240px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 6.46vw;
  padding-bottom: 2.78vh;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuItem = styled.div`
  font-family: "Pretendard";
  font-size: clamp(1rem, 1.375rem, 1.6rem);
  font-weight: 500;
  line-height: 120%;
  color: #90939f;
  padding: clamp(0.5rem, 0.75rem, 1rem) clamp(0.75rem, 1rem, 1.25rem);
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  &.active {
    background-color: #e5ebff;
    color: #2e65f3;
    font-weight: 600;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -1.5vw;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 2.76vw;
      background-color: #2e65f3;
      border-radius: 4px;
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

const MenuIcon = styled.img`
  width: 2.2vw;
  margin-right: clamp(8px, 0.52vw, 12px);
  padding: clamp(4px, 0.26vw, 6px) clamp(5px, 0.31vw, 7px);
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.52vw;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const LogoutButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem; /* 22px / 1920 */
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #898eae;
  cursor: pointer;
  text-align: center;
`;

const Hr = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #d6d6d6;
  border: none;
  margin-top: 0.25rem;
  margin-bottom: 0rem;
`;
