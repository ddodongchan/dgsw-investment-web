import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";

import * as S from "./header.style";
import Sidebar from "../sidebar/index";

export default function Header() {
  const placeholders = [
    "대박 종목 찾기🔎",
    "오늘의 황금주💰",
    "이 종목 어때요?📈",
    "투자의 신 되기✨",
    "한 방을 노려볼까?🎯",
    "10년 묻어둘 주식은?",
    "워렌 버핏도 검색할 종목!",
    "꿈의 테슬라를 찾아서🚀",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  }, []);

  return (
    <>
      <S.HeaderContainer>
        <S.LogoContainer>
          <Image src={logo} alt="Logo" width={170} height={40} />
        </S.LogoContainer>
        <S.SearchContainer>
          <S.SearchInput type="text" placeholder={placeholder} />
          <S.SearchIcon />
        </S.SearchContainer>
        <S.MenuIcon onClick={() => setIsSidebarOpen((prev) => !prev)} />
      </S.HeaderContainer>

      {isSidebarOpen && (
        <>
            <S.Overlay onClick={() => setIsSidebarOpen(false)} /> 
            <S.SidebarWrapper>
            <Sidebar />
            </S.SidebarWrapper>
        </>
        )}
    </>
  );
}