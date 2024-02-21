import {Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Listen from "./pages/Listen.jsx";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import QuickSave from "./pages/QuickSave.jsx";
import EmbedLinks from "./components/EmbedLinks.jsx";

const code = new URLSearchParams(window.location.search).get("code");
function App() {
    console.log('code', code);
    return (
        <div style={{width:"100%"}}>
            <Header/>
            <Routes>
                {/*page routing*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/listen" element={<Listen/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/quicksave" element={<QuickSave/>}/>
                <Route path="/mypodstamps" element={<EmbedLinks/>}/>
            </Routes>
            {code ? <Dashboard code={code}/> : <SignIn/>}
        </div>
    );
}

export default App
