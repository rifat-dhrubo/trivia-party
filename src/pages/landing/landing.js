import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import { WrapperDiv } from '../Style';

function Landing() {
  return (
    <WrapperDiv>
      <Hero />
      <Menu />
    </WrapperDiv>
  );
}

export default Landing;
