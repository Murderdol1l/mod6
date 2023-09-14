import React from 'react';
import styled from 'styled-components';
import Cat from "../../images/icons/cat.svg";

export function MobileStub() {
  console.log(Cat);
  return (
    <StubContainer>
      <Icon src={Cat} />
      <StyledText>
        Данная страница доступна только на ПК
    </StyledText>
    </StubContainer>
  );
};

const StubContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #171717;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: white;
  font-weight: 800;
  font-size: 28px;
  gap: 16px;
`;

const Icon = styled.img`
width: 56px;
height: 56px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;