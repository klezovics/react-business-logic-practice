import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DisplayData} from "./components/DisplayData.tsx";
import {UpdateData} from "./components/UpdateData.tsx";
import {Provider} from "react-redux";
import {store} from "./containers/reduxSetup.ts";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Provider store={store}>
                <h1>Hi</h1>
                <DisplayData/>
                <UpdateData/>
            </Provider>
        </>
    )
}

export default App
