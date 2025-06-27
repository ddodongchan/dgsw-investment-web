import * as S from "./stockcard.style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { dummyStocks } from "@/dummy/dummyStocks";

type Props = {
  name: string;
  price: string;
  change: string;
};

const StockCard = ({ name, price, change }: Props) => {
  // 해당 이름의 더미 데이터에서 priceHistory 찾기
  const stockData = dummyStocks.find((item) => item.name === name);

  const chartData = stockData
    ? stockData.priceHistory.map((price, idx) => ({
        price,
      }))
    : [];

  return (
    <S.Wrapper>
      <S.Title>
        <S.CompanyName>(주) {name}</S.CompanyName>
        <S.Price>{price}</S.Price>
      </S.Title>
      <S.SubInfo>{change}</S.SubInfo>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin - 1000", "dataMax + 1000"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.Wrapper>
  );
};

export default StockCard;