import {Routes, Route} from "react-router-dom";
import './App.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Listen from "./pages/Listen.jsx";

function App() {

    return (
        <div>
            <Header/>
            <Routes>
                {/*page routing*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/listen" element={<Listen/>}/>
            </Routes>
        </div>
    );
}

export default App
