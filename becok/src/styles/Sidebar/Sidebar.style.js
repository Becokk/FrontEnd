import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 16.98vw; /* 326 / 1920 ≈ 16.98 */
  height: auto;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f1f1f4;
  padding: 2rem 1.5rem;
  min-width: 16.98vw;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 6.46vw;
  padding-bottom: 2.78vh;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.div`
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
      left: -1.5rem;
      top: 0;
      width: 0.26vw;
      height: 100%;
      background-color: #2e65f3;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const MenuIcon = styled.img`
  width: 2.2vw;
  margin-right: clamp(8px, 0.52vw, 12px);
  padding: clamp(4px, 0.26vw, 6px) clamp(5px, 0.31vw, 7px);
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.52vw;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const LogoutButton = styled.div`
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

export const Hr = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #d6d6d6;
  border: none;
  margin-top: 0.25rem;
  margin-bottom: 0rem;
`;
