import styled from "styled-components"

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #254ACA;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Button = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`