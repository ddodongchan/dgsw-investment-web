import { useState } from "react";
import * as S from "./stockchart.style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// 종목별 차트 더미 데이터
const stockChartData: Record<string, { date: string; price: number }[]> = {
  노영재: [
    { date: '06-01', price: 21000 },
    { date: '06-02', price: 21500 },
    { date: '06-03', price: 21200 },
    { date: '06-04', price: 21800 },
    { date: '06-05', price: 22000 },
    { date: '06-06', price: 22222 },
  ],
  배채희: [
    { date: '06-01', price: 11000 },
    { date: '06-02', price: 10800 },
    { date: '06-03', price: 11200 },
    { date: '06-04', price: 11500 },
    { date: '06-05', price: 11700 },
    { date: '06-06', price: 11111 },
  ],
  문진위: [
    { date: '06-01', price: 30000 },
    { date: '06-02', price: 30500 },
    { date: '06-03', price: 31000 },
    { date: '06-04', price: 31500 },
    { date: '06-05', price: 32000 },
    { date: '06-06', price: 33333 },
  ],
};

const StockChart = () => {
  const [selectedStock, setSelectedStock] = useState("노영재");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStock(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>📈 종목 차트</S.Title>

      <S.SelectBox value={selectedStock} onChange={handleChange}>
        {Object.keys(stockChartData).map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </S.SelectBox>

      <S.ChartBox>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={stockChartData[selectedStock]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin - 500', 'dataMax + 500']} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </S.ChartBox>
    </S.Container>
  );
};

export default StockChart;