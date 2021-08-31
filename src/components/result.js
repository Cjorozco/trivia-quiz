import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 40px 0;
  p span {
    display: block;
  }
`;

const ResultScreen = ({score, setScore, results, getData}) => {
  let history = useHistory();

  const playAgain = () => {
    getData();
    setScore(0);
    history.push("/");
  };

  return (
    <div className="container">
      <Title>
        You Scored is {score} / {results.length}
      </Title>
      <div className="d-flex flex-column  align-items-center justify-content-center mt-5">
        <button type="button" className="btn btn-primary" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;