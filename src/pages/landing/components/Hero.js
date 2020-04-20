import React from 'react';
import styled from '@emotion/styled';

function Hero() {
  return (
    <HeroDiv>
      <h1>Trivia Party</h1>
    </HeroDiv>
  );
}

const HeroDiv = styled.div`
  line-height: 1.2;
  font-size: 75px;
  color: #ffffff;
  align-self: flex-start;
  flex-basis: 100%;
  text-align: center;
  background: #ff1e76;
  padding: 2em 0;
  clip-path: polygon(90% 0, 100% 0, 100% 63%, 0 100%, 0 30%);
`;

export default Hero;
