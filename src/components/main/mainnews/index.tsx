import * as S from "./mainnews.style";
import { useArticles } from "@/hooks/useArticles";

const MainNews = () => {
  const { articles } = useArticles();

  const mainNews = articles.slice(0, 3);

  return (
    <S.Container>
      <S.Title>🗞️ 주요 뉴스</S.Title>
      <S.NewsList>
        {mainNews.length === 0 ? (
          <S.NewsItem>뉴스를 불러오는 중입니다...</S.NewsItem>
        ) : (
          mainNews.map((article, i) => (
            <S.NewsItem key={i}>
              [{article.author}] {article.title}
            </S.NewsItem>
          ))
        )}
      </S.NewsList>
    </S.Container>
  );
};

export default MainNews;