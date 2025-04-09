import React, { useState } from 'react'
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import * as S from './sidebar.style'
import { Home, FileText, BarChart2 } from 'lucide-react'

const Sidebar = () => {
  const [selected, setSelected] = useState('홈')
  const username = '세세뇽'

  const menuItems = [
    { label: '홈', icon: <Home /> },
    { label: '뉴스', icon: <FileText /> },
    { label: '내 주식', icon: <BarChart2 /> },
  ]

  return (
  <S.Container>
    <S.LogoWrapper>
      <Image src={logo} alt="Logo" width={140} height={40} />
    </S.LogoWrapper>
    <S.Menu>
      {menuItems.map((item) => (
        <S.MenuItem
          key={item.label}
          selected={selected === item.label}
          onClick={() => setSelected(item.label)}
        >
          <S.IconWrapper>{item.icon}</S.IconWrapper>
          {item.label}
        </S.MenuItem>
      ))}
    </S.Menu>
    <S.UserSection>
      <S.UserIcon />
      <S.Username>{username}</S.Username>
    </S.UserSection>
  </S.Container>
)
}

export default Sidebar