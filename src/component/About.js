import '../css/About.scss';

const About = ({ infoJson }) => {

    let infoData = infoJson.info;

    return(
        <div className="About">
            <ul className="info">
                <li className="info-list">
                    <span className="info-tit">Front-end Developer</span>
                </li>
                {infoData.map((info, index) => (
                    <li className="info-list" key={index}>
                        <span className="info-tit">{info.title}</span>
                        <span className="info-cont">{info.cont}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default About;