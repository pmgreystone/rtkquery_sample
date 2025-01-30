import React, { useState, createContext, useContext } from "react"

// import { actions } from "../services/counterReducer.ts"
// import { selectCounterValue } from "../services/counterReducer.ts"
// import { useSelector } from "react-redux"
// import { Provider } from "react-redux"
// import store from "../store.js"

const initialState = { username: "", setUsername: (_: string) => { } }
const UserContext = createContext(initialState)
export const DemoApp = () => {

    const [username, setUsername] = useState("")

    return (
        <>
            <h3>parent component</h3>
            <p>{username}</p>
            <UserContext.Provider value={{ username: username, setUsername: setUsername }}>
                <DemoComponent />
            </UserContext.Provider>
        </>
    )
}

const DemoComponent = () => {

    // const count = useSelector(selectCounterValue)
    const { username, setUsername } = useContext(UserContext)

    /*
    return (
        <>
            {count}
            <input type="button" value="+" onClick={(_) => {
                console.log("increment")
                actions.increment({ payload: 1 })
            }} />
            <input type="button" value="-" onClick={(_) => {
                console.log("decrement")
                actions.decrement({ payload: 1 })
            }} />
        </>
    )
    */
   return (
    <>
        <div style={{borderColor: 'black', borderWidth: 2, width: 200, height: 100}}>
            <h4>child component</h4>
            <p>{username}</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
        </div>
    </>
   )
}