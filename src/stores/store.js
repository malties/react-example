import { configureStore } from "@reduxjs/toolkit";
import { equipmentSlice } from "../components/equipment/equipmentSlice";
import { vehicleSlice } from "../components/vehicles/vehicleSlice";
export default configureStore( {
    reducer: {
    vehicles: vehicleSlice,
    equipments: equipmentSlice,
    },
})