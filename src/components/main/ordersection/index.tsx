import * as S from "./ordersection.style"

const OrderSection = () => {
  return (
    <S.Container>
      <S.Title>💸 주문하기</S.Title>
      <S.Input type="text" placeholder="종목명 입력" />
      <S.Input type="number" placeholder="수량" />
      <S.Button>매수</S.Button>
      <S.Button>매도</S.Button>
    </S.Container>
  )
}

export default OrderSection