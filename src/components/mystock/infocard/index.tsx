import * as S from './infocard.style'

type Props = {
  info: {
    yield: string;
    totalAmount: string;
    quantity: string;
    avgPrice: string;
    totalBuy: string;
    totalSell: string;
  };
};

const InfoCard = ({ info }: Props) => {
  return (
    <S.Wrapper>
      <S.InfoItem>총 수익률 <S.RedText>{info.yield}</S.RedText></S.InfoItem>
      <S.InfoItem>총 금액 <S.Strong>{info.totalAmount}</S.Strong></S.InfoItem>
      <S.InfoItem>수량 {info.quantity}</S.InfoItem>
      <S.InfoItem>1주 평균 금액 {info.avgPrice}</S.InfoItem>
      <S.InfoItem>총 매수 {info.totalBuy}</S.InfoItem>
      <S.InfoItem>총 매도 {info.totalSell}</S.InfoItem>
    </S.Wrapper>
  );
};

export default InfoCard;