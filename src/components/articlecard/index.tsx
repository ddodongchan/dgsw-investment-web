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

const ArticleCard = ({ article, isLarge = false }: { article: Article; isLarge?: boolean }) => {
  const router = useRouter();
  const { title, summary, date, author } = article;

  const handleClick = () => {
    router.push(`/article/${encodeURIComponent(title)}`);
  };

  const formattedDate = date.slice(0, 16).replace('T', ' ');

  return (
    <S.Card onClick={handleClick} $isLarge={isLarge}>
      <S.CardContent>
        <S.Title>{title}</S.Title>
        <S.Summary $isLarge={isLarge}>{summary}</S.Summary>
      </S.CardContent>
      <S.InfoBottom>
        <span>{formattedDate}</span>
        <span>{author}</span>
      </S.InfoBottom>
    </S.Card>
  );
};

export default ArticleCard;