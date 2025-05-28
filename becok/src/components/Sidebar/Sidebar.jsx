import React from "react";
import { useNavigate } from "react-router-dom";
import becokLogo from "../../assets/becok.png";
import homeIcon from "../../assets/home.png";
import planIcon from "../../assets/plan.png";
import homestorageIcon from "../../assets/homestorage.png";
import LogoutModal from "./LogoutModal";
import {
  SidebarContainer,
  TopSection,
  Logo,
  Menu,
  MenuItem,
  MenuIcon,
  IconWrapper,
  BottomSection,
  LogoutButton,
  Hr,
} from "../../styles/Sidebar/Sidebar.style";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = React.useState("홈");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const pathMap = {
      홈: "/main",
      플랜: "/plan",
      보관함: "/storage",
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
