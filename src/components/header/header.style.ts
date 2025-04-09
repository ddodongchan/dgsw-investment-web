import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 72px;
  /* background-color: #eef5ff; */

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; 
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #0A467D;
  border-radius: 20px;
  padding: 8px 12px;
  width: 425px;
  background-color: white;
  margin-right: 32px;

  @media (max-width: 768px) {
    width: 200px;
    margin-right: 16px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  padding-left: 12px;
  font-weight: 700;
  color: #0A467D;
`;

export const SearchIcon = styled(FiSearch)`
  color: #0A467D;
  font-size: 20px;
`;

export const MenuIcon = styled(RxHamburgerMenu)`
  font-size: 28px;
  color: #0A467D;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); 
  z-index: 999; 
`