import { useRouter } from "next/router";

const useAppRouter = () => {
  const router = useRouter();

  return {
    goHome: () => router.push("/"),
    goToAbout: () => router.push("/main"),
    goToArticle: () => router.push("/article"),
    goToMyStock: () => router.push("/mystock"),
    goToProduct: (id: string) => router.push(`/product/${id}`),
    goToWrite: () => router.push("/write"),
    goToMyPage: () => router.push("/mypage"),
    goBack: () => router.back(),
    reloadPage: () => router.reload(),
  };
};

export default useAppRouter