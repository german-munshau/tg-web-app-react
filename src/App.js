import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToggle} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
            1.
            <Header/>
            2.
            <button onClick={onToggle}>Toggle</button>
        </div>
    );
}

export default App;
