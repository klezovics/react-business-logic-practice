import {configureStore, createSlice} from "@reduxjs/toolkit";

// Create a slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value++ },
        decrement: state => { state.value-- },
    },
});
export const { increment, decrement } = counterSlice.actions;

// Add slice to global state
export const store = configureStore({ reducer: { counter: counterSlice.reducer }});