import { combineReducers } from "redux";
import { equipmentSlice } from "../equipmentSlice";
import { vehicleSlice } from "../vehicleSlice";

export default combineReducers({
    vehicles: vehicleSlice, equipments: equipmentSlice
})

