import '../css/About.scss';

const About = ({ infoJson }) => {

    let infoData = infoJson.info;
    let careerData = infoJson.career

    return(
        <div className="About">
            <ul className="info">
                <li className="info-list">
                    <span className="info-tit">Front-end Developer</span>
                </li>
                {infoData.map((info, index) => (
                    <li className="info-list" key={index}>
                        <span className="info-tit">{info.title}</span>
                        <span className="info-cont">{info.content}</span>
                    </li>
                ))}
            </ul>
            <ul className="career">
                <li className="career-list">
                    <span className="career-title">Careers</span>
                </li>
                {careerData.map((career, index) => (
                    <li className="career-list" key={index}>
                        <span className="career-tit">{career.title}</span>
                        <span className="career-sub">{career.sub}</span>
                        <span className="career-date">{career.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default About;