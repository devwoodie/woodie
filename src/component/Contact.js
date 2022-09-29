import '../css/Contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <div className="Contact">
            <div className="top-text">
                <p className="hello">
                    Hello, my name is Yu Dongwoo.<br/>
                    I'm a junior developer who enjoys learning, growing and change to suit.
                </p>
                <p className="will">
                    I'll continue to grow my front-end skills.
                </p>
                <p className="bold-text">
                    " Enjoy learning and growing "<br/>
                    " Able to adapt to change "
                </p>
                <p className="want">
                    I would like to continue to challenge myself and grow in a wider place,<br/>
                    Show you how to change according to the trend rather than staying in one place.
                </p>
            </div>
            <h2 className="contact-tit">CONTACT<span className="me">ME</span></h2>
            <nav className="link-wrap">
                <Link className="link-href" target="_blank" to="//github.com/devwoodie">github</Link>
                <Link className="link-href" target="_blank" to="//velog.io/@woodie">blog</Link>
                <Link className="link-href" target="_blank" to="#">resume</Link>
            </nav>
        </div>
    )
}

export default Contact;