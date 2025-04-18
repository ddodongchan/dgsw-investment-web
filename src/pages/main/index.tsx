import Header from "@/components/header"
import Daily from "@/components/daily"
import TodayMarket from "@/components/main/todaymarket"
import MainNews from "@/components/main/mainnews/index"
import StockChart from "@/components/main/stockchart"
import OrderSection from "@/components/main/ordersection/index"
import TopStock from "@/components/main/topstock/index"

import * as S from './main.style'

const Main = () => {
  return (
    <S.Wrapper>
      <Header />
      <Daily />

      <S.Section>
        <TodayMarket />
      </S.Section>

      <S.Grid>
        <S.LeftColumn>
          <div style={{ flex: 1 }}>
            <MainNews />
          </div>
          <div style={{ flex: 1 }}>
            <TopStock />
          </div>
        </S.LeftColumn>
        <StockChart />
        <OrderSection />
      </S.Grid>
    </S.Wrapper>
  )
}

export default Main