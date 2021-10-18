// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Price from './components/Price/Price';
import About from './components/About/About';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/price">
            <Price></Price>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
