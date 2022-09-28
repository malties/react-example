/**
 * @jest-environment jsdom
 */

import '../styles/App.css';// eslint-disable-next-line
import { Vehicle, mapVehicleFromJson } from '../components/vehicles/Vehicle'; // eslint-disable-next-line
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
