import styled from "styled-components";

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Section = styled.section`
  flex: 1;
  min-width: 300px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Grid = styled.div<{ type?: "main" | "latest" }>`
  display: grid;
  gap: 20px;

  ${({ type }) =>
    type === "main"
      ? `
    grid-template-columns: 2fr 1fr;
    align-items: stretch; 
    min-height: 220px; 

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `
      : `
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const VerticalCardList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;