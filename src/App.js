import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToggle} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [tg])


    return (
        <div className="App">
            <button onClick={onToggle}>Toggle</button>
            <Header/>
        </div>
    );
}

export default App;
