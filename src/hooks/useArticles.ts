import { useEffect, useState } from "react";
import { Article } from "@/types/article";
import { fetchArticles } from "@/api/articleApi";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("access_token") || undefined;
    fetchArticles(page, token)
      .then(newArticles => {
        setArticles(prev => (page === 1 ? newArticles : [...prev, ...newArticles]));
      })
      .catch(console.error);
  }, [page]);

  return { articles, page, setPage };
};