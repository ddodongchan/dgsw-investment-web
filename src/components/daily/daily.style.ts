import styled from "styled-components";

export const Container = styled.div`
  background-color: #eef6ff;
  padding: 16px 72px;
  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.span`
  font-size: 16px;
  color: #6b7280;
  font-weight: 600;
`;

export const GreetingContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
`;

export const Greeting = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  color: #2563eb;
  margin-right: 5px;
`;