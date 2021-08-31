import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 40px 0;
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
      {
        results.map((re, i) =>
          <ul className="list-group" key={i}>
            <li className="list-group-item d-flex flex-wrap align-items-center justify-content-center">
              <span className="mb-2">{re.question}</span>
              <span className="mb-2">The answer is <b>{re.correct_answer}</b></span>
            </li>
          </ul>
        )
      }
      <div className="d-flex flex-column  align-items-center justify-content-center mt-5">
        <button type="button" className="btn btn-primary" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;