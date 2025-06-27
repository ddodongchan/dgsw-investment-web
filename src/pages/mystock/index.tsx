import { useState, useEffect } from "react";
import Header from "@/components/header";
import Daily from "@/components/daily";
import ButtonGroup from "@/components/mystock/mainnews/index";
import StockCard from "@/components/mystock/stockcard/index";
import InfoCard from "@/components/mystock/infocard/index";
import MyStockList from "@/components/mystock/mystocklist/index";

import { dummyStocks } from "@/dummy/dummyStocks";  // 경로는 실제 위치에 맞게 조정하세요
import * as S from "../../styles/mystock.style";

type StockInfo = {
  yield: string;
  totalAmount: string;
  quantity: string;
  avgPrice: string;
  totalBuy?: string;
  totalSell?: string;
};

type StockData = {
  name: string;
  price: string;
  change: string;
  info?: StockInfo;
};

const Mystock = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // 실제 API 요청 대신 더미 데이터를 셋팅
    const formattedData = dummyStocks.map((item) => ({
      name: item.name,
      price: item.currentPrice.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      change: `${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%`,
      info: {
        yield: item.yield,
        totalAmount: item.totalAmount,
        quantity: item.quantity.toString(),
        avgPrice: item.avgPrice.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      },
    }));
    setStockData(formattedData);
    setSelectedIndex(0);
  }, []);

  if (stockData.length === 0) return <div>Loading...</div>;

  const selectedStock = stockData[selectedIndex];
  const stockInfo = selectedStock.info ?? {
    yield: "-",
    totalAmount: "-",
    quantity: "-",
    avgPrice: "-",
  };

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
          <InfoCard info={stockInfo} />
          <MyStockList
            data={stockData.map(({ name, price }) => ({ name, price }))}
            activeIndex={selectedIndex}
            onClickItem={setSelectedIndex}
          />
        </S.MainSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default Mystock;