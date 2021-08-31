import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResultScreen from './result';

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

const QuizScreen = () => {
  const [results, setResults] = useState([]);
  const [checked] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const getData = async () => {
    const data = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
    const api = await data.json();
    setResults(api.results);
  }

  const handleAnswer = (e) => {
    const isCorrect = results[currentQuestion]?.correct_answer
    console.log(isCorrect);
    if (isCorrect === e.target.value) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < results.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };


  useEffect(() => {
    getData();
  }, [])

  const renderQuestion = () => {
    return (
      <>
        {
          showScore ? (
            <ResultScreen score={score} setScore={setScore} results={results} getData={getData} />
          ) : (
            <>
              <Title>
                {results[currentQuestion]?.category}
              </Title>
              <div className="card text-center border-primary">
                <div className="card-body">
                  <p className="card-text">{results[currentQuestion]?.question}</p>
                  <div className="btn-group" role="group" aria-label="true-false button group">
                    <input 
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btntrue"
                      autoComplete="off"
                      onChange={(e) => handleAnswer(e)}
                      value='True'
                      checked={checked}
                    />
                    <label className="btn btn-outline-primary" htmlFor="btntrue">True</label>
                    <input 
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnfalse"
                      autoComplete="off"
                      onChange={(e) => handleAnswer(e)}
                      value='False'
                      checked={checked}
                    />
                    <label className="btn btn-outline-primary" htmlFor="btnfalse">False</label>
                  </div>
                </div>
                <span>{currentQuestion + 1} of {results.length}</span>
              </div>
            </>
          )
        }
      </>
    );
  }

  return (
    <div className="container">
      {renderQuestion()}
    </div>
  );
}

export default QuizScreen;