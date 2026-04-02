import { counnterActions, counterReducer } from "./counterSilce";
import { CounterSchema } from "../types/countrSchema";

describe("counterSlice.test", () => {
    const state: CounterSchema = { value: 10 };
    test("decremnt", () => {
        expect(counterReducer(state, counnterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test("increment", () => {
        expect(counterReducer(state, counnterActions.increment())).toEqual({
            value: 11,
        });
    });
    test("Should work with empty state", () => {
        expect(counterReducer(undefined, counnterActions.increment())).toEqual({
            value: 1,
        });
    });
});
