import '../css/reset.css';
import '../css/App.scss';
import infoJson from '../json/Info.json';
import projectJson from '../json/Project.json';
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { BsFillSunFill, BsFillMoonFill, BsThreeDots, BsCaretDownFill} from 'react-icons/bs'
import {useCallback, useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
            <div className="responsive-text">
                <span>Checking</span>
                <span>is not</span>
                <span>possible</span>
                <span>in a</span>
                <span>Mobile</span>
                <span>Environment.</span>
            </div>
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
                <Route path="/about" element={<About infoJson={infoJson} />}/>
                <Route path="/projects" element={<Projects projectJson={projectJson} />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>

            <NavTab navigate={navigate} setPageIndex={setPageIndex} pageIndex={pageIndex}/>

            <ContactKakao  />
        </div>
    );
}

//navigate tab
const NavTab = ({navigate, setPageIndex, pageIndex}) => {
    return(
        <ul className="nav-tab">
            <li onClick={() => {navigate('/');setPageIndex(0);}} className={pageIndex === 0 ? 'tab active' : 'tab'}>INTRO</li>
            <li onClick={() => {navigate('/about') ;setPageIndex(1);}} className={pageIndex === 1 ? 'tab active' : 'tab'}>ABOUT</li>
            <li onClick={() => {navigate('/projects') ;setPageIndex(2);}} className={pageIndex === 2 ? 'tab active' : 'tab'}>PROJECTS</li>
            <li onClick={() => {navigate('/contact') ;setPageIndex(3);}} className={pageIndex === 3 ? 'tab active' : 'tab'}>CONTACT</li>
        </ul>
    )
}

//kakao profile
const ContactKakao = () => {

    let [contKakao, setContKakao] = useState(false);

    const setKakaoMode = useCallback(() => {
        if(contKakao === false){
            return setContKakao(true);
        }else{
            return setContKakao(false);
        };
    },[contKakao]);

    return(
        <div className="contactKakao">
            <div className={contKakao ? "cont-off" : "cont-off animate"} onClick={setKakaoMode}>
                {contKakao ?
                    <BsCaretDownFill className="cont-kakao-ic" /> :
                    <BsThreeDots className="cont-kakao-ic" />
                }
            </div>
            {contKakao ?
                <div className="qr-area">
                    <div className="qr-inner">
                        <img src={`${process.env.PUBLIC_URL}/kakao-qr.jpg`} alt="kakao-qr"/>
                    </div>
                    <span className="qr-text">KAKAOTALK</span>
                </div> : null
            }
        </div>
    )
}

export default App;