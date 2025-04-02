import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 72px;
  background-color: #eef5ff;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

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