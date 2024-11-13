import {useNavigate} from "react-router-dom";
import abcjs from "abcjs";
import {useEffect, useState} from "react";
import {Piano, MidiNumbers} from 'react-piano';
import {SplendidGrandPiano} from "smplr";
import useSound from 'use-sound';
import correctSoundSrc from '../assets/クイズ正解1.mp3';
import incorrectSoundSrc from '../assets/クイズ不正解1.mp3';
import 'react-piano/dist/styles.css';
import AnswerModal from "./AnswerModal.jsx";
import {Button} from "@mui/material";

// const environment = process.env.NODE_ENV || development
let context;
let piano;
const base_url = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


function Quiz() {


    const [timeRecord, setTimeRecord] = useState(0); // 現在の問題のstart時の時間
    const [results, setResults] = useState([]); // 回答した情報を{iso_name : note, time : resTime, is_correct : isCorrect}の配列で保持
    const [result, setResult] = useState({});
    const [playCorrect] = useSound(correctSoundSrc); // 正解音
    const [playIncorrect] = useSound(incorrectSoundSrc); // 不正解音

    const [isOpenModal, setIsOpenModal] = useState(false); // answer画面の表示on/off
    const [note, setNote] = useState(); //現在の問題に使われれる音符
    const [gameMode, setGameMode] = useState(10); // 出題数
    const [notes, setNotes] = useState([]); // 問題で扱う音符の種類すべて
    const [quizNb, setQuizNb] = useState(0); //現在の何問目
    const [selectedMidiNb, setSelectedMidiNb] = useState(); // 鍵盤で押された音(midiNumber)
    // const [isCorrect, setIsCorrect] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        selectGameMode();
        // console.log("useEffect > gameMode : ", gameMode);
        (async () => {
            const res = await fetch(base_url + "/api/notes");
            const data = await res.json();
            setNotes(data);
        })();
    }, [])

    useEffect(() => {
        if (note) {
            abcjs.renderAbc("notes-area", note?.abcjs_name, {scale: 3});
        }
    }, [note]);

    const selectGameMode = () => {
        const gameModeNb = document.getElementById("game-mode");
        setGameMode(parseInt(gameModeNb.value));
        console.log("gameModeNb.value", gameModeNb.value);
    }

    //　鍵盤の表示設定
    // TODO : 鍵盤の表示、quizが表示されてからclickされるまでのinterval時間の保存、最終問題後に記録をdbに書き込み
    // TODO : 基準音c4がどこであるかの表示。
    const firstNote = MidiNumbers.fromNote('e3');
    const lastNote = MidiNumbers.fromNote('f6');

    // const keyboardShortcuts = KeyboardShortcuts.create({
    //     firstNote: firstNote,
    //     lastNote: lastNote,
    //     keyboardConfig: KeyboardShortcuts.HOME_ROW,
    // });

    const playNote = (midiNumber) => {
        console.log("start : ", midiNumber);
        if (!selectedMidiNb) {
            setSelectedMidiNb(midiNumber);
            piano.start({note: midiNumber});
            const resTime = Date.now() - timeRecord;
            const isCorrect = note?.midi_name === midiNumber; // 正誤判定
            const res = {iso_name: note?.iso_name, time: resTime, is_correct: isCorrect}
            setResult(res);
            setResults([...results, res]);
        }
        // time reset
        // setTimeRecord(Date.now());
    }
    const stopNote = (midiNumber) => {

        console.log("stop : ", midiNumber);
        piano.stop(midiNumber);
        console.log("correct midi", note?.midi_name);
        console.log("selectedMidi : ", selectedMidiNb);
        if (selectedMidiNb === midiNumber) {
            setIsOpenModal(true);
            setTimeout(() => {
                    result.is_correct ? playCorrect() : playIncorrect()
                }, 200
            );

            // TODO : modalで結果を表示
            // nextボタンで、
            // isAnswerdをfalseに、setTimeRecord(Date.now())、choose()
        }

        // setTimeout(()=> {
        //     playCorrect();
        // }, 1000);

    }

    const soundSet = () => {
        // 音を鳴らす設定 ユーザーのアクション後のみしかAudioContextをブラウザで取り扱えないため。
        context = new AudioContext();
        piano = new SplendidGrandPiano(context);
    }

    const chooseNote = () => {
        const rnd = Math.floor(Math.random() * notes.length);
        setNote(notes[rnd]);
    }

    const generateQuiz = () => {
        setQuizNb(quizNb + 1);
        setSelectedMidiNb(null);
        setResult({});
        chooseNote();
        setTimeRecord(Date.now());
    }

    const defaultStep = () => {
        soundSet();
        generateQuiz();
    }

    // const handleToggle = () => {
    //     setIsOpenModal(!isOpenModal);
    // }

    const handleClose = (e, reason) => {
        if (reason === 'backdropClick') return;
        setIsOpenModal(false);
        if (quizNb === gameMode)
            navigate('/result', {state: results});
        generateQuiz();
    }


    return (
        <>
            {
                note ?
                    (<>
                        <h1>Q{quizNb}</h1>
                        <div id={'notes-area'}></div>
                        <Piano noteRange={{first: firstNote, last: lastNote}}
                               playNote={playNote}
                               stopNote={stopNote}
                               width={1000}
                        />
                        {/*<Button onClick={handleToggle}>Open modal</Button>*/}
                        <AnswerModal isOpen={isOpenModal} handleClose={handleClose} result={result}/>

                    </>) :
                    (
                        <>
                            <h1>Quiz</h1>
                            {/*<Select id="game-mode" onChange={selectGameMode} value={toString(gameMode)} defaultValue={1} variant="outlined">*/}
                            {/*    <MenuItem value={1}>1問</MenuItem>*/}
                            {/*    <MenuItem value={10}>10問</MenuItem>*/}
                            {/*    <MenuItem value={20}>20問</MenuItem>*/}
                            {/*    <MenuItem value={30}>30問</MenuItem>*/}
                            {/*</Select>*/}
                            <select id="game-mode" onChange={selectGameMode}>
                                <option value={1}>1問</option>
                                <option value={10}>10問</option>
                                <option value={20}>20問</option>
                                <option value={30}>30問</option>
                            </select>
                            <Button onClick={defaultStep}>開始</Button>
                        </>
                    )
            }
        </>
    )
}

export default Quiz