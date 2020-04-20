import React from 'react';
import styled from '@emotion/styled';

export default function Menu() {
  return (
    <MenuBar>
      <Row>
        <Button type="button">Single Player</Button>
      </Row>
      <Row>
        <Button type="button">Single Player</Button>
      </Row>
      <Row>
        <Button type="button">Single Player</Button>
      </Row>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  background: #7fff00;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  clip-path: polygon(100% 0, 100% 93%, 0 93%, 0 6%);
  padding: 2em 0;
`;

const Row = styled.div`
  display: flex;
  flex-basis: 33.33%;
  justify-content: center;
`;
const Button = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #7fff00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93.5px;
  width: 200px;
  padding: 29px 9px;
  font-family: inherit;
  align-self: center;
  cursor: pointer;
  font-size: 21px;
`;
