import { useState } from "react";
import Header from "@/components/header";
import Daily from "@/components/daily";
import ButtonGroup from "@/components/mystock/mainnews/index";
import StockCard from "@/components/mystock/stockcard/index";
import InfoCard from "@/components/mystock/infocard/index";
import MyStockList from "@/components/mystock/mystocklist/index";

import * as S from "../../styles/mystock.style";

const stockData = [
  {
    name: "노영재",
    price: "22,222뇽",
    change: "+200뇽 (0.2%)",
    info: {
      yield: "+2.23%",
      totalAmount: "22,222뇽",
      quantity: "200주",
      avgPrice: "64,000뇽",
      totalBuy: "10.000020030",
      totalSell: "10.2334243"
    }
  },
  {
    name: "배채희",
    price: "11,111뇽",
    change: "-300뇽 (-1.5%)",
    info: {
      yield: "-3.12%",
      totalAmount: "15,000뇽",
      quantity: "100주",
      avgPrice: "65,000뇽",
      totalBuy: "5.00",
      totalSell: "3.50"
    }
  },
  {
    name: "문진위",
    price: "33,333뇽",
    change: "+1000뇽 (3%)",
    info: {
      yield: "+5.00%",
      totalAmount: "33,333뇽",
      quantity: "300주",
      avgPrice: "55,000뇽",
      totalBuy: "15.00",
      totalSell: "16.50"
    }
  },
];

const Mystock = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedStock = stockData[selectedIndex];

  return (
    <S.Wrapper>
      <Header />
      <Daily />
      <S.Content>
        <ButtonGroup />
        <S.MainSection>
          <StockCard
            name={selectedStock.name}
            price={selectedStock.price}
            change={selectedStock.change}
          />
          <InfoCard info={selectedStock.info} />
          <MyStockList
            data={stockData}
            activeIndex={selectedIndex}
            onClickItem={setSelectedIndex}
          />
        </S.MainSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default Mystock;