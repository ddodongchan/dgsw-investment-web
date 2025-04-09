import Header from "@/components/header";
import ArticleCard from "@/components/articlecard/index";
import type { Article } from "@/components/articlecard/index"; // 🔧 type-only import
import * as S from "./article.style";

const dummyArticle: Article = {
  title: "[노영재] 엄청나게 큰회사합격 ㄷㄷㄷㄷ",
  summary:
    "최상목 경제부총리 겸 기획재정부 장관은 9일 미국이 상호관세 부과와 관련해 “전례없는 통상 위기를 맞고 있다”면서 “비상상황에 맞는 과감한 지원을...",
  date: "2024.03.11",
  author: "노상재 기자",
  rate: "0.3445",
  price: "2,300",
};

const Article = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.Section>
            <S.SectionTitle>📌 주요 뉴스</S.SectionTitle>
            <S.Grid>
              {[1, 2, 3].map((_, i) => (
                <ArticleCard key={`main-${i}`} article={dummyArticle} />
              ))}
            </S.Grid>
          </S.Section>

          <S.Section>
            <S.SectionTitle>🆕 최신 뉴스</S.SectionTitle>
            <S.Grid>
              {[1, 2, 3].map((_, i) => (
                <ArticleCard key={`latest-${i}`} article={dummyArticle} />
              ))}
            </S.Grid>
          </S.Section>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
};

export default Article;