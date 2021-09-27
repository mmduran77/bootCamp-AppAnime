import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Home from './Components/Home/home';
import CharacterDetail from './Components/CharacterDetail/characterDetail';
import Character from './Components/Character/character';
import About from './Components/About/about';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <CharacterDetail/>
      <About/>
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

export default App;
