import styled from "styled-components";

export const Container = styled.div`
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 60px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
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

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;