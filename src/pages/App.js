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
              <Equipment/>
              <Vehicle/>
      </header>
    </div>
  );
}

export default App;
