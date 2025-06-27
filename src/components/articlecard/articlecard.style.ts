import styled from "styled-components";

export const Card = styled.div<{ $isLarge?: boolean }>`
  background-color: white;
  border-radius: 16px;
  padding: ${({ $isLarge }) => ($isLarge ? '24px' : '16px')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Summary = styled.p<{ $isLarge?: boolean }>`
  color: #555;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isLarge }) => ($isLarge ? 6 : 2)};
  -webkit-box-orient: vertical;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #888;
  border-top: 1px solid #eee;
  padding-top: 12px;
  margin-top: auto;
`;

export const RatePrice = styled.div<{ isPositive: boolean }>`
  color: ${({ isPositive }) => (isPositive ? "red" : "blue")};
  font-weight: bold;
`;

export const CardContent = styled.div``;

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #888;
  border-top: 1px solid #eee;
  padding-top: 12px;
  margin-top: auto;
`;