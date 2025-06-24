import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`;

export const StockName = styled.h2`
  font-size: 20px;
  font-weight: 800;
`;

export const CurrentPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ChangeBox = styled.div<{ isUp: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.isUp ? "red" : "blue")};
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`;

export const DropdownToggleBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
  user-select: none;
  color: #254aca;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  max-height: 220px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow-y: auto;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StockItem = styled.div`
  padding: 10px 16px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f0f2ff;
  }
`;

export const NoResult = styled.div`
  padding: 12px 16px;
  color: #999;
  font-style: italic;
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px;
`;

export const ErrorMsg = styled.div`
  margin-top: 10px;
  color: red;
  font-weight: 500;
`;