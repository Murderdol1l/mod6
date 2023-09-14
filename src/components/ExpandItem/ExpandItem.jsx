import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import { CodeBlock } from '../../components';

export function ExpandItem({ children, index }) {
  const [expand, setExpand] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    if (expand) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expand]);
  return (
    <MainContainer>
      <Container onClick={() => {
        setExpand(!expand);
      }}>
        {children}
      </Container>

      <CSSTransition
        in={expand}
        timeout={1000}
        unmountOnExit
        classNames="text"
      >
        <div className="text-block" ref={myRef}>
          <CodeBlock index={index}/>
        </div>
      </CSSTransition>

    </MainContainer>
  );
};

const Container = styled.div`
  height: 100%;
  border-radius: 15px;
  &:hover {
    outline: 1px solid red;
  }
`;

const MainContainer = styled.div`
  margin-bottom: 70px;
`;
