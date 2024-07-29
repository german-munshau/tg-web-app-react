import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToggle, onClose} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
            1.
            <Header close={onClose}/>
            2.
            <button onClick={onToggle}>Toggle</button>
        </div>
    );
}

export default App;
