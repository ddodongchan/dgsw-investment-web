import * as S from './mainnews.style';
import { useArticles } from '@/hooks/useArticles';

const ButtonGroup = () => {
  const { articles } = useArticles();

  const buttonNews = articles.slice(0, 3);

  return (
    <S.Wrapper>
      {buttonNews.length === 0 ? (
        <S.Container>뉴스를 불러오는 중입니다...</S.Container>
      ) : (
        buttonNews.map((article, i) => (
          <S.Container key={i}>
            [{article.author}] {article.title}
          </S.Container>
        ))
      )}
    </S.Wrapper>
  );
};

export default ButtonGroup;