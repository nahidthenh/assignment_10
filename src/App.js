// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Price from './components/Price/Price';
import About from './components/About/About';
import Login from './components/Login/Login';
import Resigter from './components/Register/Resigter';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './components/context/AuthProvider';
import Service from './components/Service/Service';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/price">
              <Price></Price>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Resigter></Resigter>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateRoute path="/appointment/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;


// const from = location.state || { from: { pathname: '/' } };
