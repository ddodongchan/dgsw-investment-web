import styled from "styled-components";


export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`

export const Section = styled.div`
  padding: 1rem 5vw;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 1rem;
  padding: 1rem 5vw;
  flex-grow: 1;
  align-items: stretch;
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`