import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import History from "./components/History.jsx";
import Result from "@/components/Result.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="history" element={<History/>}/>
            <Route path="result" element={<Result/>}/>
        </Routes>
    )
}

export default App
