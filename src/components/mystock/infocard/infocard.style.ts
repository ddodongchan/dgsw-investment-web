import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1;  
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 600px;
  flex: 1;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
`;

export const RedText = styled.span`
  color: #e74c3c;
  font-weight: 700;
`;

export const Strong = styled.span`
  color: #e10600;
  font-weight: 800;
  font-size: 20px;
`;