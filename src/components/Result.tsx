import styled from "@emotion/styled";
import React from "react";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

interface Props {
  price: number;
}

const Result = ({ price }: Props) => {
  return price === 0 ? (
    <Message>Choose mark, year and insurance type</Message>
  ) : (
    <QuoteResult>
      <QuoteText>Total is: $ {price.toFixed(2)}</QuoteText>
    </QuoteResult>
  );
};

export default Result;
