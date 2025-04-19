import styled from "styled-components"

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 320px;
`

export const TabMenu = styled.div`
  display: flex;
  gap: 8px;
`

export const Tab = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 8px 0;
  background-color: ${({ active }) => (active ? "#254ACA" : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #ddd;
  border-radius: 6px;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  cursor: pointer;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const PriceBox = styled.div`
  display: flex;
  gap: 6px;
`

export const PriceTab = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 6px 0;
  background-color: ${({ active }) => (active ? "#254ACA" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
  font-weight: ${({ active }) => (active ? 600 : 400)};
  cursor: pointer;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const InfoText = styled.div`
  font-size: 14px;
  color: #333;
`

export const Button = styled.button`
  padding: 12px;
  background-color: #254ACA;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #1A39A8;
  }
`

export const Spacer = styled.div<{ height?: number }>`
  height: ${({ height }) => height || 50}px;
`