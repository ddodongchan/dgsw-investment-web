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
  ${({ type }) =>
    type === "main"
      ? `
    display: flex;
    gap: 20px;
    height: 100%; 
    align-items: stretch;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `
      : `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `}
`;
export const VerticalCardList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;

  & > * {
    flex: 1;
  }

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ReadMoreButton = styled.button`
  color: white;
  background-color: #254ACA;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;

  &:hover{
    background-color: #0A467D;
  }
`

export const ReadMoreButtonConatiner = styled.div`
  text-align: center;
  margin-top: 20px;
`