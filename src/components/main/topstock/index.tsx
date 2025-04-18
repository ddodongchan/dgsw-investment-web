import * as S from "./topstock.style"

const TopStocks = () => {
  return (
    <S.Container>
      <S.Title>🚀 오늘의 TOP 종목</S.Title>
      <S.StockList>
        <S.StockItem>
          <S.StockName>삼성전자</S.StockName>
          <S.StockChange className="up">+4.21%</S.StockChange>
        </S.StockItem>
        <S.StockItem>
          <S.StockName>카카오</S.StockName>
          <S.StockChange className="down">-2.12%</S.StockChange>
        </S.StockItem>
      </S.StockList>
    </S.Container>
  )
}

export default TopStocks