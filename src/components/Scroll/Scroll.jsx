import React from "react";
import styled from "styled-components";

export function Scroll() {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ScrollContainer onClick={handleClick}>
      Наверх
    </ScrollContainer>
  );
};

const ScrollContainer = styled.button`
    background-color: #0050ff;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 15px;
    padding: 10px 20px;
    border: none;
    color: white;
    font-weight: 500;
`;
