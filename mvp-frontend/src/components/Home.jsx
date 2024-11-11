import {useNavigate} from "react-router-dom";
import '../App.css'

function Home() {
    const navigate = useNavigate();
    const handleQuiz = () => {
        navigate('/quiz');
    }
    const handleHistory = () => {
        navigate('/history');
    }
    return (
        <>
            <h1>Musical Notes Quiz</h1>
            <button onClick={handleQuiz}>start</button>
            <button onClick={handleHistory}>過去のスコア</button>
        </>
    )
}

export default Home
