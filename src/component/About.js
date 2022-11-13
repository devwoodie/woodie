import '../css/About.scss';
import {useEffect, useRef} from "react";
import { Routes, Link } from 'react-router-dom';

const About = ({ infoJson }) => {
    let infoData = infoJson.info;
    let careerData = infoJson.careers;
    let awardData = infoJson.awards;
    let abilityData = infoJson.ability;
    const titRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', titOpacity);
        window.addEventListener('scroll', subOpacity);
        return () => {
            window.removeEventListener('scroll', titOpacity);
            window.removeEventListener('scroll', subOpacity);
        };
    }, [About]);

    //About me opacity
    const titOpacity = () => {
        if(window.scrollY > 5){
            titRef.current.classList.add('opacity-off');
        }else{
            titRef.current.classList.remove('opacity-off');
        }
    }

    const subOpacity = () => {
        if(window.scrollY > 1400){
            subRef.current.classList.add('opacity-off');
        }else{
            subRef.current.classList.remove('opacity-off');
        }
    }

    return(
        <div className="About">
            <h2 ref={titRef} className="about-tit">ABOUT<span className="me">ME</span></h2>
            <ul className="info" ref={subRef}>
                <nav className="info-nav">
                    <Link className="info-href" target="_blank" to="//github.com/devwoodie">github</Link>
                    <Link className="info-href" target="_blank" to="//velog.io/@woodie">blog</Link>
                    <Link className="info-href" target="_blank" to="#">resume</Link>
                </nav>
                <li className="info-list info-title">
                    <span className="info-tit">Front-End Developer</span>
                </li>
                {infoData.map((info, index) => (
                    <li className="info-list" key={index}>
                        <span className="info-tit">{info.title}</span>
                        <span className="info-cont">{info.content}</span>
                    </li>
                ))}
            </ul>
            <div className="content-wrap">
                <ul className="cont1 contents">
                    <li className="contents-list">
                        <span className="contents-title ability">Ability</span>
                    </li>
                    {abilityData.map((ability, index) => (
                        <li className="contents-list" key={index}>
                            <span className="contents-tit">{ability.title}</span>
                            <span className="contents-sub bar">
                                <span className="bar-inner"></span>
                            </span>
                            <span className="contents-date">{ability.percent}</span>
                        </li>
                    ))}
                </ul>
                <ul className="cont2 contents">
                    <li className="contents-list">
                        <span className="contents-title careers">Careers</span>
                    </li>
                    {careerData.map((career, index) => (
                        <li className="contents-list" key={index}>
                            <span className="contents-tit">{career.title}</span>
                            <span className="contents-sub">{career.sub}</span>
                            <span className="contents-date">{career.date}</span>
                        </li>
                    ))}
                </ul>
                <ul className="cont3 contents">
                    <li className="contents-list">
                        <span className="contents-title awards">Awards</span>
                    </li>
                    <span className="contents-tit mrt">International Cooking Contest</span>
                    {awardData.map((award, index) => (
                        <li className="contents-list" key={index}>
                            <span className="contents-sub">{award.title}</span>
                            <span className="contents-date">{award.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default About;