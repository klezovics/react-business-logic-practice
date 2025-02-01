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

// This store is given to the Provider wrapper
export const store = configureStore({ reducer: { counter: counterSlice.reducer }});

// These will be used with the useDispatch hook to dispatch actions
// I think they are called action creators
export const { increment, decrement } = counterSlice.actions;

// Add slice to global state
