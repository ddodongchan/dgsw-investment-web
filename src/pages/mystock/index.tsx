import styled from "styled-components";
import Header from "@/components/header";
import Daily from "@/components/daily";
import ButtonGroup from "@/components/mystock/mainnews/index";
import StockCard from "@/components/mystock/stockcard/index";
import InfoCard from "@/components/mystock/infocard/index";
import MyStockList from "@/components/mystock/mystocklist/index";

import * as S from '../../styles/mystock.style'
const mystock = () => {
  return (
    <S.Wrapper>
      <Header />
      <Daily />
      <S.Content>
        <ButtonGroup />
        <S.MainSection>
          <StockCard />
          <InfoCard />
          <MyStockList />
        </S.MainSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default mystock;