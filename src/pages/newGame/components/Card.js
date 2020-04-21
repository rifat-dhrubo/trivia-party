import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import zeusImage from '../zeus.svg';

export default function Card({ link, category }) {
  return (
    <Div to={link}>
      <img src={zeusImage} alt="zeus " />
      <h3>{category}</h3>
    </Div>
  );
}
const Div = styled(Link)`
  display: flex;
  flex-basis: 15%;
  border-radius: 23px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  align-items: center;
  & img {
    width: 120px;
    height: auto;
    flex-basis: 100%;
  }
  color: #000;
  text-decoration: none;
  margin: 1em 0;
`;
