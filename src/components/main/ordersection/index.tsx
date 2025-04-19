import { useState } from "react"
import * as S from "./ordersection.style"

const OrderSection = () => {
  const [activeTab, setActiveTab] = useState<"구매" | "판매" | "대기">("구매")
  const [priceType, setPriceType] = useState<"지정가" | "시장가">("지정가")

  return (
    <S.Container>
      <S.TabMenu>
        {["구매", "판매", "대기"].map((tab) => (
          <S.Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tab}
          </S.Tab>
        ))}
      </S.TabMenu>

      <S.Row>
        <S.Label>주문 유형</S.Label>
        <S.Select>
          <option>일반 주문</option>
          <option>시장가 주문</option>
        </S.Select>
      </S.Row>

      <S.Row>
        <S.Label>구매 가격</S.Label>
        <S.PriceBox>
          {["지정가", "시장가"].map((type) => (
            <S.PriceTab
              key={type}
              active={priceType === type}
              onClick={() => setPriceType(type as typeof priceType)}
            >
              {type}
            </S.PriceTab>
          ))}
        </S.PriceBox>
      </S.Row>

      <S.Input type="text" placeholder="주문 금액을 입력해주세요" />

      <S.Row>
        <S.Label>수량</S.Label>
        <S.Input type="number" placeholder="최대 39주 가능" />
      </S.Row>

      <S.InfoText>내 주식 평균 <strong>63,440뇽</strong></S.InfoText>
      <S.InfoText>구매 후 예상 -</S.InfoText>
      
      <S.Spacer />

      <S.Button>구매하기</S.Button>
    </S.Container>
  )
}

export default OrderSection