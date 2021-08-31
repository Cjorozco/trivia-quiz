import React from 'react';
import { Link } from "react-router-dom";
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

const Text = styled.p`
  width: 50%;
  margin: 20px 0;
  text-align: center;
`;

const BeginButton = styled.button`
  a {
    color: white;
  }
`;

const HomeScreen = () => {
  return (
    <div className="container">
      <Title>
        <p><span>Welcome to the</span><span>Trivia Challenge</span></p>       
      </Title>
      <div className="d-flex flex-column  align-items-center justify-content-center">
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
      </div>
      <div className="d-flex flex-column  align-items-center justify-content-center mt-5">
        <BeginButton type="button" className="btn btn-primary">
          <Link to="/quiz">Begin</Link>
        </BeginButton>
      </div>
    </div>
  );
}

export default HomeScreen;