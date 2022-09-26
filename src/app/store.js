import { configureStore } from "@reduxjs/toolkit";
import counterReduce from '../features/counter/counterSlice'

export default configureStore( {
    reducer: {
        counter: counterReduce,
    },
})