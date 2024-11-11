import {useNavigate} from "react-router-dom";
import abcjs from "abcjs";
import {useEffect} from "react";
const environment = process.env.NODE_ENV || development

function Quiz() {
    useEffect(()=> {
        abcjs.renderAbc("notes-area", "C2");
    }, []);
    const tmp = async () => {
        //TODO : 鍵盤の表示
        const res = await fetch('http://localhost:3000/api/notes');
        const data = await res.json();
        console.log("notes data : ", data?.notes);
        // memo : notesの管理はまずはobjでもよい
    };
    // TODO : 鍵盤の表示、quizが表示されてからclickされるまでのinterval時間の保存、最終問題後にdbに書き込み
    return (
        <>
            <h1>Quiz {}</h1>
            <div id={'notes-area'} style={{}}>

            </div>
            <div id={'key-area'}>
                <button onClick={tmp}>click here</button>
            </div>
        </>
    )
}

export default Quiz