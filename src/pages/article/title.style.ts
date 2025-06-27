import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 80px;
  font-family: "Pretendard", sans-serif;
  background-color: white
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #0A467D;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Category = styled.p`
  color: #0A467D;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 24px;
`;

export const Divider = styled.hr`
  margin: 24px 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;
  line-height: 1.0;
  color: #222;
`;