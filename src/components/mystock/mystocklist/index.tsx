import * as S from './mystocklist.style'

type Props = {
  data: {
    name: string;
    price: string;
  }[];
  activeIndex: number;
  onClickItem: (index: number) => void;
};

const MyStockList = ({ data, activeIndex, onClickItem }: Props) => {
  return (
    <S.Wrapper>
      {data.map((item, idx) => (
        <S.TransactionItem
          key={idx}
          active={activeIndex === idx}
          onClick={() => onClickItem(idx)}
        >
          <S.StockDetails>
            <S.StockTitleWrapper>
              <S.StockTitle>{item.name}</S.StockTitle>
              <S.StockTitle>{item.price}</S.StockTitle>
            </S.StockTitleWrapper>
            <S.SubDetailWrapper>
              <S.StockWeek>{idx + 1}주</S.StockWeek>
              {/* <S.SubDetail>-22,222(50%)</S.SubDetail> */}
            </S.SubDetailWrapper>
          </S.StockDetails>
        </S.TransactionItem>
      ))}
    </S.Wrapper>
  );
};

export default MyStockList;