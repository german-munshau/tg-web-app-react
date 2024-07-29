import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onCLose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <button onClick={onCLose}>Закрыть</button>
        </div>
    );
}

export default App;
