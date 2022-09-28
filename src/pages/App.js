/**
 * @jest-environment jsdom
 */

import logo from '../styles/logo.svg';
import '../styles/App.css';
import { Vehicle, mapVehicleFromJson } from '../components/vehicles/Vehicle'; 
import { Equipment, mapEquipmentFromJson } from '../components/equipment/Equipment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
              {mapEquipmentFromJson()}
              {mapVehicleFromJson()}
      </header>
    </div>
  );
}

export default App;
