import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'
import { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor = '#181818'
      showAlert("Dark mode enabled", "success")
    }
  }

  const showAlert = (msg, type)=>{
    setAlert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextMate" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/> 
      <div className="container my-2">
        <Switch>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title',
  aboutText: 'Set about'
}

export default App;
