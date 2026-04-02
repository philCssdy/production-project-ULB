import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState = { value: 0 } satisfies CounterState as CounterState;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
    },
});

export const { actions: counnterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
