import {create} from "zustand/react";

export const useZustandStore = create(set => ({
    value: 0,
    increment: () => set(state => ({ value: state.value + 1 })),
    decrement: () => set(state => ({ value: state.value - 1 })),
}));