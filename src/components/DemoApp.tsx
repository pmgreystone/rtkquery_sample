import "../../css/index.css"

import React, { useState, createContext, useContext } from "react"

import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from "../services/counterReducer.ts";
import { Provider } from "react-redux"
import store from "../store.js"

const initialState = { username: "", setUsername: (_: string) => { } }
const UserContext = createContext(initialState)

import { ReposComponent } from "./ApiComponents.tsx";


export const DemoApp = () => {

    const [username, setUsername] = useState("")

    return (
        <div id="demoParentComponent">
            <h3>Parent Component</h3>
            <p>This is the parent component, outside <pre>UserContext</pre>, it is the source of the <pre>username</pre> state</p>
            <pre style={{ color: 'white' }}>{username}</pre>
            <UserContext.Provider value={{ username: username, setUsername: setUsername }}>
                <DemoContextComponent />
            </UserContext.Provider>
            <Provider store={store}>
                <DemoStoreComponent />
                <ReposComponent />
            </Provider>
        </div>
    )
}

const DemoContextComponent = () => {

    const { username, setUsername } = useContext(UserContext)

    return (
        <div id="contextComponentContainer">
            <h4>Child Component (Context Demo)</h4>
            <p>{username}</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        </div>
    )
}

const DemoStoreComponent = () => {

    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div id="storeComponentContainer">
            <h4>Child Component (Store Demo)</h4>
            <p>count is {count}</p>
            <div id="dispatchContainer">
                <input type="button" value="-" onClick={(_) => {
                    console.log("decrement")
                    dispatch(decrement(1))
                }} />
                <input type="button" value="+" onClick={(_) => {
                    console.log("increment")
                    dispatch(increment(1))
                }} />
            </div>
        </div>
    )
}