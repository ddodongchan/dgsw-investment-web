import { useRouter } from "next/router";
import { useEffect } from "react";

const ArticleDetail = () => {
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    if (title) {
      console.log("현재 기사 제목:", title);
    }
  }, [title]);

  return (
    <div>
      <h1>기사 상세 페이지</h1>
      <p>제목: {decodeURIComponent(title as string)}</p>
    </div>
  );
};

export default ArticleDetail;