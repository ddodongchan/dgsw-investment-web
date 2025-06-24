import Header from "@/components/header";
import ArticleCard from "@/components/articlecard/index";
import * as S from "../../styles/article.style";
import { useArticles } from "@/hooks/useArticles";

const ArticlePage = () => {
  const { articles, page, setPage } = useArticles();

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          {page === 1 && (
            <>
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
            </>
          )}

          <S.Section>
            <S.SectionTitle>📰 전체 뉴스</S.SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {(page === 1 ? articles.slice(7) : articles).map((article, i) => (
                <ArticleCard key={`list-${i}`} article={article} />
              ))}
            </div>
          </S.Section>

          <S.ReadMoreButtonConatiner>
            <S.ReadMoreButton onClick={() => setPage(prev => prev + 1)}>더 보기</S.ReadMoreButton>
          </S.ReadMoreButtonConatiner>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
};

export default ArticlePage;