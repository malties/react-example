/**
 * @jest-environment jsdom
 */

import '../styles/App.css';// eslint-disable-next-line
import { Vehicle, loadVehicleFromJson } from '../components/vehicles/Vehicle'; // eslint-disable-next-line
import { Equipment, loadEquipmentFromJson } from '../components/equipment/Equipment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
              {loadEquipmentFromJson()}
        </ul>
        <ul>
              {loadVehicleFromJson()}
        </ul>
      </header>
    </div>
  );
}

export default App;
