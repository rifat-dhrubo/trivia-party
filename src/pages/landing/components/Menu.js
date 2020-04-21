import React from 'react';
import { MenuBar, Row, Button, StyledLink } from './Menu.style';

export default function Menu() {
  return (
    <MenuBar>
      <Row>
        <StyledLink to="newGame">Single Player</StyledLink>
      </Row>
      <Row>
        <Button type="button" disabled>
          Single Player
        </Button>
      </Row>
      <Row>
        <Button type="button" disabled>
          Single Player
        </Button>
      </Row>
    </MenuBar>
  );
}
