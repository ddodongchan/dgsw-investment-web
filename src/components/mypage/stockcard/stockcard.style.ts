import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 600px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompanyName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const SubInfo = styled.div`
  color: red;
`;

export const Chart = styled.div`
  background: #f0f0f0;
  height: 150px;
  margin-top: 10px;
`;