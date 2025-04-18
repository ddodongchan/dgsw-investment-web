import * as S from "./mainnews.style"

const MainNews = () => {
  return (
    <S.Container>
      <S.Title>🗞️ 주요 뉴스</S.Title>
      <S.NewsList>
        <S.NewsItem>1. 삼성전자, 역대 최고 실적 달성</S.NewsItem>
        <S.NewsItem>2. 코스피 2,600 돌파…외국인 매수세 주목</S.NewsItem>
        <S.NewsItem>3. 애플, AI 칩셋 개발 본격화</S.NewsItem>
      </S.NewsList>
    </S.Container>
  )
}

export default MainNews