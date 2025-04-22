import styled from "styled-components"

export const Container = styled.div`
  padding: 24px; 
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
  height: 100%; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 16px;
`

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`

export const NewsItem = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 600;
`