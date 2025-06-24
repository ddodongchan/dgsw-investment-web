import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from './title.style'
import Header from "@/components/header";
import ReactMarkdown from 'react-markdown';

const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

interface Article {
  title: string;
  summary: string;
  date: string;
  author: string;
  rate: string;
  price: string;
  context?: string;
}

const ArticleDetail = () => {
  const router = useRouter();
  const { title } = router.query;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("access_token");

        const res = await fetch(`${API}/api/news/all?page=1&size=20`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const raw = await res.text();
        const parsed = JSON.parse(raw);
        const dataArray = parsed.data;

        const matchedArticle = dataArray.find(
          (item: any) => item.title === decodeURIComponent(title as string)
        );

        if (matchedArticle) {
          setArticle({
            title: matchedArticle.title || "",
            summary: matchedArticle.context || "",
            date: matchedArticle.date || "",
            author: matchedArticle.user_name || "",
            rate: matchedArticle.rate || "0",
            price: matchedArticle.price || "0",
            context: matchedArticle.context || "",
          });
        } else {
          console.warn("해당 제목의 기사를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("기사 상세 로딩 실패:", error);
      }
    };

    if (title) {
      fetchArticles();
    }
  }, [title]);

  const handleBack = () => {
    router.back(); 
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Header />
      <S.Container>
        <S.BackButton onClick={handleBack}>← 뒤로가기</S.BackButton>

        {article ? (
          <>
            <S.Category>DGSW</S.Category>
            <S.Title>{article.title}</S.Title>
            <S.Meta>
              {article.author} 기자 ・ {article.date}
            </S.Meta>
            <S.Divider />
            {/* 마크다운 렌더링 */}
            <S.Content>
              <ReactMarkdown>{article.context || ''}</ReactMarkdown>
            </S.Content>
          </>
        ) : (
          <p>기사를 불러오는 중입니다...</p>
        )}
      </S.Container>
    </div>
  );
};

export default ArticleDetail;