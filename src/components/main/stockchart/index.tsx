import * as S from "./stockchart.style"

const StockChart = () => {
  return (
    <S.Container>
      <S.Title>📈 종목 차트</S.Title>
      <S.ChartBox>
        <S.DummyChart>차트 영역</S.DummyChart>
      </S.ChartBox>
    </S.Container>
  )
}

export default StockChart