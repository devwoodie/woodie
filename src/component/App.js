import '../css/reset.css';
import '../css/App.scss';
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import {useCallback, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {

    let [mode, setMode] = useState(false);

    //모드 변경 false=dark / true=light
    const modeChange = useCallback(() => {
        if(mode === false){
            return setMode(true);
        }else{
            return setMode(false);
        };
    },[mode]);

    return (
        <div className="App inner">
            <div className="mode" onClick={modeChange}>
                { mode === true ?
                    <span>
                        <BsFillMoonFill className="mode-icon" />
                        DARK MODE
                    </span>:
                    <span>
                        <BsFillSunFill className="mode-icon" />
                        LIGHT MODE
                    </span> }
            </div>
            <div className="content">
                <h1 className="woodie">WOODIE</h1>
                <h2 className="my-name">YU<br/>DONG WOO</h2>
            </div>
            <Routes>
                <Route path="/about" element={<div>about</div>}/>
                <Route />
                <Route />
                <Route />
            </Routes>
            <ul className="nav-tab">
                <li className="tab active">INTRO</li>
                <li className="tab">ABOUT</li>
                <li className="tab">PROJECTS</li>
                <li className="tab">CONTACT</li>
            </ul>
        </div>
    );
}

export default App;
