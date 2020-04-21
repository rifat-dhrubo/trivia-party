import React from 'react';
import styled from '@emotion/styled';
import { WrapperDiv } from '../Style';

export default function Trivia() {
  return (
    <WrapperDiv>
      <QuestionDiv>
        <h1>Nidhogg is a mythical creature from what mythology?</h1>
      </QuestionDiv>
      <AnswersDiv>
        <AnswerRow>
          <Answer>Greek</Answer>
        </AnswerRow>
        <AnswerRow>
          <Answer>Egyptian</Answer>
        </AnswerRow>
        <AnswerRow>
          <Answer>Norse</Answer>
        </AnswerRow>
        <AnswerRow>
          <Answer>Hindu</Answer>
        </AnswerRow>
      </AnswersDiv>
    </WrapperDiv>
  );
}

const QuestionDiv = styled.div`
  background: #ff1e76;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  margin: 1em 0;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const AnswersDiv = styled.div`
  background: #7fff00;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  padding: 2em 0;
  align-items: center;
`;

const AnswerRow = styled.div`
  display: flex;
  flex-basis: 20%;
`;

const Answer = styled.button`
  width: 200px;
  padding: 29px 9px;
  border-radius: 93.5px;
  border: 1px solid #00ff66;
  flex-basis: 100%;
  background: #00ff66;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 1em;
  font-family: inherit;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 1px 1px white;
    outline: none;
  }
`;
