import styled from 'styled-components';
import { Panel, PanelResizeHandle } from 'react-resizable-panels';


export const Wrapper = styled.div`
  background-color: #eaf6ff;
  padding: 0 72px;
  display: flex;
  flex-direction: column;

  height: calc(100vh - 120px); 
`;


export const Header = styled.h1`
  color: #003e6b;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  margin-top: 20px;
`;

export const PanelWrapper = styled(Panel)`
  background: white;
  border: 1px solid #c3dafe;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ResizeHandle = styled(PanelResizeHandle)`
  width: 10px;
  cursor: col-resize;
  background-color: #c3dafe;
  margin: 0 0.5rem;
`;

export const RegisterButton = styled.button`
  background-color: #254ACA;
  color: white;
  padding: 0.5rem 4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #c3dafe;
  border-radius: 12px;
  padding: 1.5rem;
  width: 350px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ContentBox = styled.div`
  flex: 1;
  background: #fafafa;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  background: #2c62d4;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  align-self: flex-end;
`;

export const TextArea = styled.textarea`
  flex: 1;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  min-height: 300px;
  font-family: 'Pretendard', sans-serif;
  background-color: #fefefe;
  outline: none;
`;

export const MarkdownPreview = styled.div`
  flex: 1;
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 8px;
  overflow-y: auto;
  line-height: 1.6;
  color: #222;

  h1, h2, h3 {
    color: #1e40af;
    margin-top: 1rem;
  }

  code {
    background-color: #f1f5f9;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }

  pre {
    background-color: #f1f5f9;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
  }

  blockquote {
    border-left: 4px solid #60a5fa;
    padding-left: 1rem;
    color: #555;
    margin: 1rem 0;
  }
`;