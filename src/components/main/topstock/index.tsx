import React, { useState } from "react"
import * as S from "./topstock.style"

type Stock = {
  name: string
  change: number
  price: number
}

type TabType = "거래상위" | "상한가" | "하한가"

const dummyData: Record<TabType, Stock[]> = {
  거래상위: [
    { name: "조성걸", change: -0.3445, price: 2300 },
    { name: "윤세욱", change: -0.12, price: 2150 },
    { name: "배성은", change: 0.45, price: 3100 },
    { name: "정여원", change: -0.05, price: 1980 },
    { name: "배채희", change: 0.23, price: 2600 },
  ],
  상한가: [
    { name: "문진위", change: 29.99, price: 12800 },
    { name: "서승훈", change: 29.95, price: 9500 },
    { name: "임규연", change: 29.85, price: 14300 },
    { name: "김나연", change: 29.7, price: 8700 },
    { name: "이윤채", change: 29.5, price: 11200 },
  ],
  하한가: [
    { name: "김호준", change: -29.89, price: 3200 },
    { name: "조성걸", change: -29.75, price: 4500 },
    { name: "박시현", change: -29.6, price: 2100 },
    { name: "이슬아", change: -29.5, price: 7400 },
    { name: "이강현", change: -29.4, price: 5900 },
  ],
}

const tabOptions: TabType[] = ["거래상위", "상한가", "하한가"]

const TopStocks = () => {
  const [activeTab, setActiveTab] = useState<TabType>("거래상위")

  return (
    <S.Container>
      <S.Title>🚀 오늘의 TOP 종목</S.Title>
      <S.Tabs>
        {tabOptions.map((tab) => (
          <S.Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </S.Tab>
        ))}
      </S.Tabs>
      <S.StockList>
        {dummyData[activeTab].map((stock, index) => (
          <S.StockItem key={index}>
            <S.StockName>{stock.name}</S.StockName>
            <S.StockChange className={stock.change > 0 ? "up" : "down"}>
              {stock.change > 0 ? "▲" : "▼"} {Math.abs(stock.change).toFixed(2)}%
            </S.StockChange>
            <S.StockPrice>{stock.price.toLocaleString()}</S.StockPrice>
          </S.StockItem>
        ))}
      </S.StockList>
    </S.Container>
  )
}

export default TopStocks