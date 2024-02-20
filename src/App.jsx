import {Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Listen from "./pages/Listen.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {

    return (
        <div style={{width:"100%"}}>
            <Header/>
            <Routes>
                {/*page routing*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/listen" element={<Listen/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App
