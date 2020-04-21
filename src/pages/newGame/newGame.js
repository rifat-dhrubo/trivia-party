import React, { useState } from 'react';
import styled from '@emotion/styled';
import { WrapperDiv } from '../Style';
import Card from './components/Card';

export default function NewGame() {
  const [route, setRoute] = useState('trivia');
  const [category, setCategory] = useState('Mythology');

  return (
    <WrapperDiv>
      <CategoryDiv>
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
      </CategoryDiv>
      <CategoryDiv>
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
      </CategoryDiv>
      <CategoryDiv>
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
        <Card link={`/${route}`} category={category} />
      </CategoryDiv>
    </WrapperDiv>
  );
}

const CategoryDiv = styled.div`
  background: #ff1e76;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  margin: 1em 0;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
`;
