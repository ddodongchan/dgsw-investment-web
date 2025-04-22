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

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Tab = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#254ACA" : "#f1f1f1")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 6px 17px;
  font-size: 13px;
  cursor: pointer;
  font-weight: 600;
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

export const StockPrice = styled.span`
  width: 50px;
  text-align: right;
  color: #333;
`