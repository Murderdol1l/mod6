import React from "react";
import styled from "styled-components";
import { BgTemplates } from "../../hooks";

export function Layout({ children, height, templateName, index }) {

  const TEMPLATES = BgTemplates();
  return (
    <BGContainer height={height} template={TEMPLATES[templateName][index]} />
  );
};

const BGContainer = styled.div`
  height: ${props => props.height + "px"};
  background-image: url(${props => props.template});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  border-radius: 15px;
  
  &:hover {
    outline: 3px solid black;
  }
`;
