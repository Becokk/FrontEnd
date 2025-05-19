import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import becokLogo from "../../assets/becok.png";
import homeIcon from "../../assets/home.png";
import planIcon from "../../assets/plan.png";
import remindIcon from "../../assets/remember.png";
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
      리멤버: "/main/remember",
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
            className={activeMenu === "리멤버" ? "active" : ""}
            onClick={() => handleMenuClick("리멤버")}
          >
            <IconWrapper>
              <MenuIcon src={remindIcon} alt="리멤버" />
              리멤버
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
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 6.46vw;
  margin-bottom: 2.5rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuItem = styled.div`
  font-family: "Pretendard";
  font-size: 1.04vw; /* 20px / 1920 */
  font-weight: 500;
  line-height: 120%;
  color: #90939f;
  padding: 0.75rem 1rem;
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
  }

  &:active {
    transform: scale(0.97);
  }
`;

const MenuIcon = styled.img`
  width: 1.8vw; /* equivalent to 20px / 1920 */
  margin-right: 0.52vw; /* equivalent to 10px / 1920 */
  padding: 0.26vw 0.31vw; /* top/bottom: 5px, left/right: 6px / 1920 */
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
  gap: 0.5rem;
  font-size: 1.15vw; /* 22px / 1920 */
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #898eae;
  cursor: pointer;
  padding: 0.25rem 0;
  text-align: center;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #d6d6d6;
  border: none;
  margin-top: 0.25rem;
  margin-bottom: 0rem;
`;
