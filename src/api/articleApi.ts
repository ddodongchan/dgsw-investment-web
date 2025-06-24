import { Article } from "@/types/article";

const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

export const fetchArticles = async (pageNumber = 1, token?: string): Promise<Article[]> => {
  const res = await fetch(`${API}/api/news/all?page=${pageNumber}&size=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const raw = await res.text();
  const parsed = JSON.parse(raw);

  const dataArray = parsed.data;

  if (!Array.isArray(dataArray)) {
    throw new Error("API 응답 data가 배열이 아닙니다");
  }

  return dataArray.map((item: any) => ({
    title: item.title || "",
    summary: item.context || "",
    date: item.date || "",
    author: item.user_name || "",
    rate: item.rate || "0",
    price: item.price || "0",
    context: item.context || "",
  }));
};