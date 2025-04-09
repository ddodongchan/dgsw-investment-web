import styled from 'styled-components'


export const Container = styled.div`
  width: 300px;
  height: calc(100vh - 80px);
  background: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 40px 26px;
  margin: 40px;

  @media (max-width: 768px) {
    width: 72px;
    padding: 24px 12px;
    margin: 20px 12px;
    border-radius: 20px;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    img {
      width: 40px !important;
      height: auto !important;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 90px;

  @media (max-width: 768px) {
    padding-top: 40px;
    gap: 8px;
  }
`

export const MenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  height: 55px;
  border-radius: 13px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#E9F6FF' : 'transparent')};
  color: ${({ selected }) => (selected ? '#254ACA' : '#000')};
  font-weight: ${({ selected }) => (selected ? '900' : 'bold')};
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f4f8;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0;
    padding: 8px 0;
    font-size: 0;
    height: 48px;
    border-radius: 10px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`

export const UserIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #8cbbe6;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`

export const Username = styled.div`
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`