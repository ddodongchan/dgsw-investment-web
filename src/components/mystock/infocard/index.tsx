import * as S from './infocard.style'

type Props = {
  info: {
    yield: string;
    totalAmount: string;
    quantity: string;
    avgPrice: string;
  };
};

const InfoCard = ({ info }: Props) => {
  return (
    <S.Wrapper>
      <S.InfoItem>
        <span>총 수익률</span>
        <S.RedText>{info.yield}</S.RedText>
      </S.InfoItem>
      <S.InfoItem>
        <span>총 금액</span>
        <S.Strong>{info.totalAmount}</S.Strong>
      </S.InfoItem>
      <S.InfoItem>
        <span>수량</span>
        <span>{info.quantity}</span>
      </S.InfoItem>
      <S.InfoItem>
        <span>1주 평균 금액</span>
        <span>{info.avgPrice}</span>
      </S.InfoItem>
    </S.Wrapper>
  );
};

export default InfoCard;