import '../css/About.scss';
import { Routes, Link } from 'react-router-dom';

const About = ({ infoJson }) => {

    let infoData = infoJson.info;
    let careerData = infoJson.careers;
    let awardData = infoJson.awards;

    return(
        <div className="About">
            <h2 className="about-tit">ABOUT<span className="me">ME</span></h2>
            <ul className="info">
                <nav className="info-nav">
                    <Link className="info-href" target="_blank" to="//github.com/devwoodie">github</Link>
                    <Link className="info-href" target="_blank" to="//velog.io/@woodie">blog</Link>
                    <Link className="info-href" target="_blank" to="#">resume</Link>
                </nav>
                <li className="info-list info-title">
                    <span className="info-tit">Front-end Developer</span>
                </li>
                {infoData.map((info, index) => (
                    <li className="info-list" key={index}>
                        <span className="info-tit">{info.title}</span>
                        <span className="info-cont">{info.content}</span>
                    </li>
                ))}
            </ul>
            <ul className="contents">
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
            <ul className="contents">
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
    )
};

export default About;