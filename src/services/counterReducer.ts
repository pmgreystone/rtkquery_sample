// https://redux-toolkit.js.org/api/createReducer
// https://stackoverflow.com/questions/66307302/react-redux-createslice-or-createreducer

import { createSlice } from '@reduxjs/toolkit'

interface CounterReducerAction {
    type: string
    payload: number
}
interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }

const counterReducer = createSlice({
    name: 'counter',
    reducerPath: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state,action) => {
            state.value += action.payload
        },
        decrement: (state,action) => {
            state.value += action.payload
        }
    }
})

export const { actions } = counterReducer
export const selectCounterValue = (state: { counter: CounterState }) => state.counter.value
export default counterReducer