import '../css/reset.css';
import '../css/App.scss';
import Intro from "./Intro";
import Contact from "./Contact";
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import {useCallback, useState} from "react";
import { Routes, Route, Link, useNavigate, outlet } from "react-router-dom";

const App = () => {

    let navigate = useNavigate()
    let [mode, setMode] = useState(false);
    let [pageIndex, setPageIndex] = useState(0);
    const htmlTag = document.querySelector('html');

    //모드 변경 false=dark / true=light
    const modeChange = useCallback(() => {
        if(mode === false){
            htmlTag.classList.add('light');
            return setMode(true);

        }else{
            htmlTag.classList.remove('light');
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

            <Routes>
                <Route path="/" element={<Intro />}/>
                <Route path="/about" element={<div>ABOUT</div>}/>
                <Route path="/projects" element={<div>PROJECTS</div>}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>

            <ul className="nav-tab">
                <li onClick={() => {navigate('/');setPageIndex(0);}} className={pageIndex === 0 ? 'tab active' : 'tab'}>INTRO</li>
                <li onClick={() => {navigate('/about') ;setPageIndex(1);}} className={pageIndex === 1 ? 'tab active' : 'tab'}>ABOUT</li>
                <li onClick={() => {navigate('/projects') ;setPageIndex(2);}} className={pageIndex === 2 ? 'tab active' : 'tab'}>PROJECTS</li>
                <li onClick={() => {navigate('/contact') ;setPageIndex(3);}} className={pageIndex === 3 ? 'tab active' : 'tab'}>CONTACT</li>
            </ul>
        </div>
    );
}

export default App;
