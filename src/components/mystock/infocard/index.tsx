import * as S from './infocard.style'

const InfoCard = () => {
  return (
    <S.Wrapper>
      <S.InfoItem>총 수익률 <S.RedText>+2.23%</S.RedText></S.InfoItem>
      <S.InfoItem>총 금액 <S.Strong>2,2222뇽</S.Strong></S.InfoItem>
      <S.InfoItem>수량 200주</S.InfoItem>
      <S.InfoItem>1주 평균 금액 64,000뇽</S.InfoItem>
      <S.InfoItem>총 매수 10.000020030</S.InfoItem>
      <S.InfoItem>총 매도 10.2334243</S.InfoItem>
    </S.Wrapper>
  );
};

export default InfoCard;
