/**
 * @jest-environment jsdom
 */

import logo from '../styles/logo.svg';
import '../styles/App.css';
import { Counter } from '../features/counter/Counter';
import { Vehicle } from '../components/vehicles/Vehicle'; 
import { Equipment } from '../components/equipment/Equipment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Equipment/>
      <Vehicle/>
      <Counter/>
    </div>
  );
}

export default App;
