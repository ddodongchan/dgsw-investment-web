import { useRouter } from "next/router";

const useAppRouter = () => {
  const router = useRouter();

  return {
    goHome: () => router.push("/"),
    goToAbout: () => router.push("/main"),
    goToArticle: () => router.push("/article"),
    goToMyPage: () => router.push("/mypage"),
    goToProduct: (id: string) => router.push(`/product/${id}`),
    goBack: () => router.back(),
    reloadPage: () => router.reload(),
  };
};

export default useAppRouter