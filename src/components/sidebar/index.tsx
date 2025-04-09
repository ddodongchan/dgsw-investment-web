import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import logo from "../../assets/img/logo.svg";
import * as S from './sidebar.style'
import { Home, FileText, BarChart2 } from 'lucide-react'

const Sidebar = () => {
  const router = useRouter()
  const username = '세세뇽'

  const menuItems = [
    { label: '홈', icon: <Home />, path: '/main' },
    { label: '뉴스', icon: <FileText />, path: '/article' },
    { label: '내 주식', icon: <BarChart2 />, path: '/mypage' },
  ]

  const [selected, setSelected] = useState('')

  useEffect(() => {
    const current = menuItems.find((item) => router.pathname.includes(item.path))
    if (current) {
      setSelected(current.label)
    }
  }, [router.pathname])

  const handleClick = (label: string, path: string) => {
    setSelected(label)
    router.push(path)
  }

  const handleUserClick = () => {
    setSelected('내 주식')
    router.push('/mypage')
  }

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
            onClick={() => handleClick(item.label, item.path)}
          >
            <S.IconWrapper>{item.icon}</S.IconWrapper>
            {item.label}
          </S.MenuItem>
        ))}
      </S.Menu>
      <S.UserSection onClick={handleUserClick}>
        <S.UserIcon />
        <S.Username>{username}</S.Username>
      </S.UserSection>
    </S.Container>
  )
}

export default Sidebar