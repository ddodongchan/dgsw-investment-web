import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 250px; /* 높이를 Recharts에 맞게 조금 키움 */
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px;
`;

export const DummyChart = styled.div`
  color: #aaa;
`;

export const SelectBox = styled.select`
  padding: 6px 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background: #f0f2ff;
  color: #254ACA;
  font-weight: 600;
`;