import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    const {tg, onToggle, onClose} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [tg])


    return (
        <div className="App">
            <Header/>
            <button onClick={onToggle}>Toggle</button>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
