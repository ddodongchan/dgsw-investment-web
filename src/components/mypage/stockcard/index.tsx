import * as S from './stockcard.style'

const StockCard = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.CompanyName>(주) 노영노영노영재</S.CompanyName>
        <S.Price>22,222뇽</S.Price>
      </S.Title>
      <S.SubInfo>+ 200뇽 (0.2%)</S.SubInfo>
      <S.Chart />
    </S.Wrapper>
  );
};

export default StockCard;
