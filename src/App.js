import './App.css';
import NavBar from './Components/NavBar/navBar';
import Home from './Components/Home/home';
import CharacterDetail from './Components/CharacterDetail/characterDetail';
import Character from './Components/Character/character';
import About from './Components/About/about';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CharDetail from './Components/CharacterDetail/charDetail';


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        
        <Switch> 
          <Route path="/characterDetail">
            <CharacterDetail />            
          </Route> 
          <Route exact path="/CharDetail/:name">
            <CharDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
                   
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
      
      {/* <Home/>
      <CharacterDetail/>
      <About/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
// function home() {
//   return <h2>Home</h2>;
// }


// function characterDetail() {
//   return <CharacterDetail/>;
// }
// function about() {
//   return <About/>;
// }


export default App;
