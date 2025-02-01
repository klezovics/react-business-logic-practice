import {create} from "zustand/react";

// Create a store and use it in components. No need for a Provider type wrapper unlike Redux.
export const useZustandStore = create(set => ({
    value: 0,
    increment: () => set(state => ({ value: state.value + 1 })),
    decrement: () => set(state => ({ value: state.value - 1 })),
}));