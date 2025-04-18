import * as S from "./orderhistory.sytle"

const OrderHistory = () => {
  return (
    <S.Container>
      <S.Title>📜 주문 기록</S.Title>
      <S.HistoryList>
        <S.HistoryItem>2025.04.15 - 삼성전자 매수 20주</S.HistoryItem>
        <S.HistoryItem>2025.04.14 - 카카오 매도 10주</S.HistoryItem>
      </S.HistoryList>
    </S.Container>
  )
}

export default OrderHistory