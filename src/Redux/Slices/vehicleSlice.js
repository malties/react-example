import { createSlice } from '@reduxjs/toolkit' 

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: {
        vehicle: [],
    },
    reducers: {
        getVehicles:(state,action) =>{
            return {
                ...state,
                vehicle: action.payload,
            }
        },
        addVehicle:(state,action) =>{
            state.vehicle = [...state.vehicle,{...action.payload}]
        }
    },
})

export const { getVehicles, addVehicle} = vehicleSlice.actions
export default vehicleSlice.reducer