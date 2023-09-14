import React from "react";
import styled from "styled-components";
import { CodeTemplates } from "../../hooks";

export function CodeBlock({ index }) {

  const TEMPLATES = CodeTemplates();

  return (
    <>
      <PreStyled>
        <CodeStyled dangerouslySetInnerHTML={TEMPLATES[index]} />
      </PreStyled>
    </>
  );
};

const CodeStyled = styled.code`
  display: inline-block;
  padding: 40px;
  line-height: 1.5;
  font-family: 'JetBrainsMonoNL';

  &::selection {
    background-color: #133d68;
  }
`;

const PreStyled = styled.pre`
  margin: 0;
  background-color: #232323;
  border-radius: 15px;
  color: #6d6d6d;
`;