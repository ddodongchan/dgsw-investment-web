import { useEffect, useState } from "react"
import * as S from "./todaymarket.style"

const dummyMarkets = [
  { label: "코스피", value: "2,500.00 (+1.25%)", up: true },
  { label: "코스닥", value: "850.35 (-0.62%)", up: false },
  { label: "다우", value: "34,567.89 (+0.89%)", up: true },
  { label: "나스닥", value: "13,123.45 (-0.45%)", up: false },
  { label: "S&P500", value: "4,321.98 (+0.15%)", up: true },
  { label: "니케이", value: "32,456.78 (-1.12%)", up: false },
  { label: "상해종합", value: "3,045.22 (+0.33%)", up: true },
]

const TodayMarket = () => {
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else if (width < 1280) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  return (
    <S.Container>
      <S.Title>📊 오늘의 증시</S.Title>
      <S.MarketList>
        {dummyMarkets.slice(0, visibleCount).map((market, index) => (
          <S.MarketItem key={index}>
            <S.Label>{market.label}</S.Label>
            <S.Value className={market.up ? "up" : "down"}>{market.value}</S.Value>
          </S.MarketItem>
        ))}
      </S.MarketList>
    </S.Container>
  )
}

export default TodayMarket