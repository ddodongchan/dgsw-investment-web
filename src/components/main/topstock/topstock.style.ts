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
  font-weight: bold;
  margin-bottom: 16px;
`

export const StockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`

export const StockItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`

export const StockName = styled.span`
  color: #333;
  font-weight: 500;
`

export const StockChange = styled.span`
  &.up {
    color: #f44336;
  }
  &.down {
    color: #2196f3;
  }
`