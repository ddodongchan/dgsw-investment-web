import { useEffect, useState } from "react";
import Header from "@/components/header";
import ArticleCard from "@/components/articlecard/index";
import * as S from "../../styles/article.style";

const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

export interface Article {
  title: string;
  summary: string;
  date: string;
  author: string;
  rate: string;
  price: string;
  context?: string;
}

const ArticlePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("access_token");

        const res = await fetch(`${API}/api/news/all?page=1&size=10`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const raw = await res.text();
        const parsed = JSON.parse(raw);

        console.log("API 응답 데이터:", parsed);

        const dataArray = parsed.data;

        if (!Array.isArray(dataArray)) {
          console.error("API 응답 data가 배열이 아닙니다:", dataArray);
          return;
        }

        const articleList: Article[] = dataArray.map((item: any) => ({
          title: item.title || "",
          summary: item.context || "",
          date: item.date || "",
          author: item.user_name || "",
          rate: item.rate || "0",
          price: item.price || "0",
          context: item.context || "",
        }));

        setArticles(articleList);
      } catch (error) {
        console.error("뉴스 로딩 실패:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.Section>
            <S.SectionTitle>📌 주요 뉴스</S.SectionTitle>
            <S.Grid type="main" style={{ height: "400px" }}>
              <div style={{ flex: 1 }}>
                {articles[0] && <ArticleCard article={articles[0]} />}
              </div>

              <S.VerticalCardList>
                {articles.slice(1, 4).map((article, i) => (
                  <div key={i} style={{ overflow: "hidden" }}>
                    <ArticleCard article={article} />
                  </div>
                ))}
              </S.VerticalCardList>
            </S.Grid>
          </S.Section>

          <S.Section>
            <S.SectionTitle>📢 최신 뉴스</S.SectionTitle>
            <S.Grid type="latest">
              {articles.slice(4, 7).map((article, i) => (
                <ArticleCard key={`latest-${i}`} article={article} />
              ))}
            </S.Grid>
          </S.Section>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
};

export default ArticlePage;