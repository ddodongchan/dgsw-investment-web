import * as S from "./mainnews.style"

const MainNews = () => {
  return (
    <S.Container>
      <S.Title>🗞️ 주요 뉴스</S.Title>
      <S.NewsList>
        <S.NewsItem>[노영재] 엄청난엄청난엄청난 회사 입사 성공함</S.NewsItem>
        <S.NewsItem>[노일재] 본인이 임베디드가 되겠다고 선언해...일파만파</S.NewsItem>
        <S.NewsItem>[노이재] 노이재, 이렇게 살다가 노이로제</S.NewsItem>
      </S.NewsList>
    </S.Container>
  )
}

export default MainNews