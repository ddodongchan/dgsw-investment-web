import styled from "styled-components"

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const MarketList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const MarketItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
`

export const Label = styled.span`
  color: #555;
`

export const Value = styled.span`
  &.up {
    color: #f44336;
  }
  &.down {
    color: #2196f3;
  }
`