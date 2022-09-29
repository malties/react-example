const equipmentData = require('../../../resources/equipments.json');
import { createSlice } from '@reduxjs/toolkit' 

export const equipmentSlice = createSlice ({
    name: 'equipment',
    initialState: {
        equipment : [],
    },
    reducers:{
        getEquipment:(state,action) =>{
            return {
                ...state,
                equipment: action.payload,
            }
        },
        addEquipment:(state, action) =>{
            state.equipment = [...state.equipment, {...action.payload}]    
        }
    }
})

export const { getEquipment, addEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;