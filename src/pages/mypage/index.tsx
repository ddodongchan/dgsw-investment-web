import styled from "styled-components";
import Header from "@/components/header";
import Daily from "@/components/daily";
import ButtonGroup from "@/components/mypage/mainnews/index";
import StockCard from "@/components/mypage/stockcard/index";
import InfoCard from "@/components/mypage/infocard/index";
import MyStockList from "@/components/mypage/mystocklist/index";

const Mypage = () => {
  return (
    <Wrapper>
      <Header />
      <Daily />
      <Content>
        <ButtonGroup />
        <MainSection>
          <StockCard />
          <InfoCard />
          <MyStockList />
        </MainSection>
      </Content>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;  
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 72px;
`;

const MainSection = styled.div`
  display: flex;
  gap: 20px;
  flex-grow: 1; 
  flex-wrap: wrap;
`;