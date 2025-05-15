import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '@/components/header';

const Mypage = () => {
  return (
    <>
    <Header/>
      <GlobalStyle />
      <Container>
      <Sidebar>
        <SidebarTitle>내 정보</SidebarTitle> 
        <ProfileCard>
            <Avatar />
            <UserInfo>
            <Grade>3학년 5반 1번</Grade>
            <Name>배채희</Name>
            <Role>・ 투자자</Role>
            </UserInfo>
            <EditButton>정보 수정</EditButton>
        </ProfileCard>
        </Sidebar>

        <Main>
          <SectionTitle>최근에 본 뉴스</SectionTitle>
          <NewsList>
            {Array(4).fill(0).map((_, i) => (
              <NewsCard key={i}>
                <NewsTitle>[노영재] 엄청나게 큰회사합격함 ㄷㄷㄷ</NewsTitle>
                <NewsPreview>
                  노삼재ㅣㅁㄴㅇㄹㅁㄴㅁㄴㅁㄴㅁㄴㅇㄹㅁㄴㅁㄴㅁㄴㄹ...
                </NewsPreview>
                <NewsFooter>
                  <PriceUp>▲ 0.3445</PriceUp>
                  <Volume>2,300</Volume>
                  <Date>2024.03.11</Date>
                  <Author>노삼재 기자</Author>
                </NewsFooter>
              </NewsCard>
            ))}
          </NewsList>
        </Main>
      </Container>
    </>
  );
};

export default Mypage;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #eaf5ff;
  }
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 120px);
  margin: 20px 72px;
`;

const Sidebar = styled.div`
  width: 360px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #254ACA;
  text-align: center;
  height: 100%;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 auto 16px;
`;

const UserInfo = styled.div`
  margin-bottom: 20px;
`;

const Grade = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 8px 0;
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const Role = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #1e40af;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const ProfileTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1e293b;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const NewsCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #254ACA;
  width: 100%;
  flex: 1;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewsTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const NewsPreview = styled.div`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 12px;
`;

const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
`;

const PriceUp = styled.span`
  color: red;
`;

const Volume = styled.span``;
const Date = styled.span``;
const Author = styled.span``;