import React, { useState } from "react"
import * as S from "./topstock.style"

const dummyStocks = [
  { name: "노영노영", change: -0.3445, price: 2300 },
  { name: "노영노영", change: -0.3445, price: 2300 },
  { name: "노영노영", change: 0.3445, price: 2300 },
  { name: "노영노영", change: -0.3445, price: 2300 },
  { name: "노영노영", change: -0.3445, price: 2300 },
]

const tabOptions = ["거래상위", "상한가", "하한가"]

const TopStocks = () => {
  const [activeTab, setActiveTab] = useState("거래상위")

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
        {dummyStocks.map((stock, index) => (
          <S.StockItem key={index}>
            <S.StockName>{stock.name}</S.StockName>
            <S.StockChange className={stock.change > 0 ? "up" : "down"}>
              {stock.change > 0 ? "▲" : "▼"} {Math.abs(stock.change).toFixed(4)}
            </S.StockChange>
            <S.StockPrice>{stock.price.toLocaleString()}</S.StockPrice>
          </S.StockItem>
        ))}
      </S.StockList>
    </S.Container>
  )
}

export default TopStocks