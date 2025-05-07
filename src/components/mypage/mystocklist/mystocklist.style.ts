import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  /* border-radius: 10px; */
  flex: 1;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 600px;
  overflow-y: auto; 
  border-left: 1px solid #254ACA;
`;

export const StockDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const StockTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const StockTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
`

export const SubDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubDetail = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #2196f3;
`;

export const StockWeek = styled.div`
    color: #898989;
    font-weight: 600;
    font-size: 15px;
`

export const TransactionItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "active",
  })<{ active?: boolean }>`
    background: ${(props) => (props.active ? "#CEEAFF" : "")}; 
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer; 
`;
