import { useState } from "react";
import * as S from './mystocklist.style'

const TransactionList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // 클릭 시 토글
  };

  return (
    <S.Wrapper>
      {Array.from({ length: 10 }).map((_, idx) => (
        <S.TransactionItem
          key={idx}
          active={activeIndex === idx}
          onClick={() => handleItemClick(idx)}
        >
          <S.StockDetails>
            <S.StockTitleWrapper>
              <S.StockTitle>노영재</S.StockTitle>
              <S.StockTitle>22,222뇽</S.StockTitle>
            </S.StockTitleWrapper>
            <S.SubDetailWrapper>
              <S.StockWeek>2주</S.StockWeek>
              <S.SubDetail>-22,222(50%)</S.SubDetail>
            </S.SubDetailWrapper>
          </S.StockDetails>
        </S.TransactionItem>
      ))}
    </S.Wrapper>
  );
};

export default TransactionList;