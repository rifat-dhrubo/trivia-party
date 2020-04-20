import React from 'react';
import styled from '@emotion/styled';

export default function Menu() {
  return (
    <MenuBar>
      <ButtonDiv>
        {/* <Button type="button">Single Player</Button>

        <Button type="button">Single Player</Button>

        <Button type="button">Single Player</Button> */}
      </ButtonDiv>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  background: #7fff00;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15.5em 0;
  clip-path: polygon(100% 0, 100% 0, 100% 73%, 0 100%, 0 37%);
  flex-wrap: wrap;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-basis: 100%;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93.5px;
  width: 100px;
  font-family: inherit;
  align-self: center;
`;
