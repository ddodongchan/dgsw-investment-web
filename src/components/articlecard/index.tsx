import React from "react";
import { useRouter } from "next/router";
import * as S from "./articlecard.style";

export interface Article {
  title: string;
  summary: string;
  date: string;
  author: string;
  rate: string;
  price: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
  const router = useRouter();
  const { title, summary, date, author, rate, price } = article;

  const handleClick = () => {
    // 여기선 title을 URL로 단순 변환해 사용
    router.push(`/article/${encodeURIComponent(title)}`);
  };

  const rateValue = parseFloat(rate);
  const isPositive = rateValue >= 0;

  return (
    <S.Card onClick={handleClick}>
      <S.Title>{title}</S.Title>
      <S.Summary>{summary}</S.Summary>
      <S.Info>
        <span>{date}</span>
        <span>{author}</span>
      </S.Info>
      <S.RatePrice isPositive={isPositive}>
        {isPositive ? "▲" : "▼"} {Math.abs(rateValue)} &nbsp;&nbsp; {price}
      </S.RatePrice>
    </S.Card>
  );
};

export default ArticleCard;