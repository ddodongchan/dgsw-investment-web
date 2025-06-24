import { useEffect, useRef, useState } from "react"
import * as S from "./ordersection.style"

const OrderSection = () => {
  const [activeTab, setActiveTab] = useState<"구매" | "판매" | "대기">("구매")
  const [priceType, setPriceType] = useState<"지정가" | "시장가">("지정가")

  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [stockCode, setStockCode] = useState("aaa") 

  const socketRef = useRef<WebSocket | null>(null)

  const WS_BASE = process.env.NEXT_PUBLIC_WS_BASE

  useEffect(() => {
    socketRef.current = new WebSocket(`${WS_BASE}/socket/stock/order`)

    socketRef.current.onopen = () => {
      console.log("WebSocket 연결됨")
    }

    socketRef.current.onerror = (error) => {
      console.error("WebSocket 오류 발생:", error)
    }

    return () => {
      socketRef.current?.close()
    }
  }, [WS_BASE])

  // 주문 처리 함수
  const handleOrder = () => {
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      alert("서버와 연결되어 있지 않습니다.")
      return
    }

    const payload = {
      user_id: 123,
      type: activeTab === "판매" ? "sell" : "buy",
      stock_code: stockCode,
      amount: Number(amount),
      price: priceType === "시장가" ? null : Number(price),
      timestamp: new Date().toISOString(),
    }

    socketRef.current.send(JSON.stringify(payload))
    alert("주문이 성공적으로 전송되었습니다!")
  }

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

      {priceType === "지정가" && (
        <S.Input
          type="text"
          placeholder="주문 금액을 입력해주세요"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      )}

      <S.Row>
        <S.Label>수량</S.Label>
        <S.Input
          type="number"
          placeholder="최대 39주 가능"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </S.Row>

      <S.InfoText>내 주식 평균 <strong>63,440뇽</strong></S.InfoText>
      <S.InfoText>구매 후 예상 -</S.InfoText>

      <S.Spacer />

      <S.Button onClick={handleOrder}>
        {activeTab === "판매" ? "판매하기" : "구매하기"}
      </S.Button>
    </S.Container>
  )
}

export default OrderSection