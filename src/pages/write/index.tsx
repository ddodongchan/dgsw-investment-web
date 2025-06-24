import * as S from '../../styles/write.style';
import Header from '@/components/header';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Panel,
  PanelGroup,
} from 'react-resizable-panels';

function Write() {
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  const handleRegisterClick = async () => {
    const accessToken =
      typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

    if (!accessToken) {
      alert("로그인이 필요합니다. 로그인 후 이용해주세요.");
      return;
    }

    const confirmMessage = window.confirm("등록할까요말까요???");

    if (!confirmMessage) {
      alert("등록이 취소되었습니다.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/news/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: title,
          context: markdown,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("등록되었습니다!");
      setTitle('');
      setMarkdown('');
    } catch (error) {
      console.error('등록 중 오류 발생:', error);
      alert("등록에 실패했습니다. 다시 시도해주세요.");
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

              <S.Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="기사 제목을 입력하세요"
              />

              <S.TextArea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="마크다운 형식으로 기사를 작성해보세요!"
              />

              <S.RegisterButton onClick={handleRegisterClick}>
                등록하기
              </S.RegisterButton>
            </S.PanelWrapper>
          </Panel>

          <S.ResizeHandle />

          <Panel defaultSize={40} minSize={20}>
            <S.PanelWrapper>
              <S.ArticleTitle>📄 실시간 미리보기</S.ArticleTitle>

              {/* 제목 미리보기 영역 */}
              <S.TitlePreviewBox>
                <span>제목</span>
                <h2>{title || '제목이 여기에 표시됩니다'}</h2>
              </S.TitlePreviewBox>

              {/* 마크다운 미리보기 영역 */}
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

export default Write;