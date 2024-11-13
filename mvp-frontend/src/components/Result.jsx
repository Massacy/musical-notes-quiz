import {Button} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import BasicTable from "@/components/BasicTable.jsx";

function Result() {
    const navigate = useNavigate();
    const handleQuiz = () => {
        navigate('/quiz');
    }
    const location = useLocation()
    const state = location?.state;
    console.log("state : ", state);
    return (
        <>
            <h1>お疲れ様でした</h1>
            <div>
                今回のスコア
                {/*<ul>*/}
                {/*    {state.map((result) => {*/}
                {/*        return <li>{result?.iso_name} {result?.time} {result?.is_correct ? "◯" : "✗"}</li>*/}
                {/*    })}*/}
                {/*</ul>*/}
                <BasicTable rows={state}></BasicTable>
            </div>
            <Button onClick={handleQuiz}>もう一度挑戦</Button>
        </>
    )
}

export default Result