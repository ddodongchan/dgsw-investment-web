import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Summary = styled.p`
  color: #555;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 8px;
`;

export const RatePrice = styled.div<{ isPositive: boolean }>`
  color: ${({ isPositive }) => (isPositive ? "red" : "blue")};
  font-weight: bold;
`;