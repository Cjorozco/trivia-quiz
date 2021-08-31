import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import HomeScreen from './components/home';
import QuizScreen from './components/quiz';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/quiz">
          <QuizScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
