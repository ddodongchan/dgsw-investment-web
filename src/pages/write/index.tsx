import * as S from './write.style';
import Header from '@/components/header';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';

export default function Home() {
  const [markdown, setMarkdown] = useState('');

  const handleRegisterClick = () => {
    const confirmMessage = window.confirm("등록할까요말까요???");
    if (confirmMessage) {
      alert("등록되었습니다!");
    } else {
      alert("등록이 취소되었습니다.");
    }
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title> ✒️ 기사 쓰기</S.Title>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={60} minSize={20}>
            <S.PanelWrapper>
              <S.ArticleTitle>📝 기사 작성</S.ArticleTitle>
              <S.TextArea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="마크다운 형식으로 기사를 작성해보세요!"
              />
              <S.RegisterButton onClick={handleRegisterClick}>등록하기</S.RegisterButton>
            </S.PanelWrapper>
          </Panel>

          <S.ResizeHandle />

          <Panel defaultSize={40} minSize={20}>
            <S.PanelWrapper>
              <S.ArticleTitle>📄 실시간 미리보기</S.ArticleTitle>
              <S.MarkdownPreview>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </S.MarkdownPreview>
            </S.PanelWrapper>
          </Panel>
        </PanelGroup>
      </S.Wrapper>
    </>
  );
}