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
  font-size: 28px;
  color: #ffffff;
  align-self: flex-start;
  flex-basis: 100%;
  text-align: center;
  background: #ff1e76;
  padding: 5em 0;
  clip-path: polygon(100% 0%, 100% 93%, 0 93%, 0 10%);

  @media (min-width: 576px) {
    letter-spacing: 0;
    font-size: 37px;
    padding: 4em 0;
  }
  @media (min-width: 768px) {
    letter-spacing: 0;
    font-size: 40px;
    padding: 4em 0;
  }
  @media (min-width: 992px) {
    letter-spacing: 0;
    font-size: 40px;
    padding: 4em 0;
  }
  @media (min-width: 1200px) {
    letter-spacing: 0;
    font-size: 54px;
    padding: 3em 0;
  }
`;

export default Hero;
