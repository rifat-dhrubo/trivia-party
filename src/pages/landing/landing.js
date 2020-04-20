import React from 'react';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import Menu from './components/Menu';

function Landing() {
  return (
    <WrapperDiv>
      <Hero />
      <Menu />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #3b4d4e;
  height: 100vh;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

export default Landing;
