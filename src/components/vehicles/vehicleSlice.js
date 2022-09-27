const vehicleData = require('../../../resources/vehicles.json');
import { createSlice } from '@reduxjs/toolkit' 

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: {
        value: 0,
    },
    reducers: {

    },
})

export default vehicleSlice.reducer