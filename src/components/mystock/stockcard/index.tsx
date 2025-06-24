import * as S from './stockcard.style';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

type Props = {
  name: string;
  price: string;
  change: string;
};

// 더미 차트 데이터
const dummyChartData = [
  { date: '06-01', price: 21000 },
  { date: '06-02', price: 21500 },
  { date: '06-03', price: 21200 },
  { date: '06-04', price: 21800 },
  { date: '06-05', price: 22000 },
  { date: '06-06', price: 22222 },
];

const StockCard = ({ name, price, change }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.CompanyName>(주) {name}</S.CompanyName>
        <S.Price>{price}</S.Price>
      </S.Title>
      <S.SubInfo>{change}</S.SubInfo>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={dummyChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} />
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