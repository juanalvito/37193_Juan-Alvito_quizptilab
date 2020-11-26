import logo from './logo.svg';
import './App.css';
import up from './up.jpg';
import down from './down.jpg';
import jam from './jam.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className ="Title">
          SIMPLE COUNTDOWN 
        </p>
      <img src = {up} className="arrow1"></img>
      <img src = {down} className="arrow2"></img>
      <img src = {up} className="arrow3"></img>
      <img src = {down} className="arrow4"></img>
      <img src = {up} className="arrow5"></img>
      <img src = {down} className="arrow6"></img>
      <img src = {up} className="arrow7"></img>
      <img src = {down} className="arrow8"></img>
      </header>
    </div>
  );
}

export default App;
