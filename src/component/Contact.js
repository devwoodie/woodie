import '../css/Contact.scss';
import { Link } from 'react-router-dom';
import {useEffect, useRef} from "react";

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
            <nav className="link-wrap">
                <Link className="link-href" target="_blank" to="//github.com/devwoodie">github</Link>
                <Link className="link-href" target="_blank" to="//devwoodie.tistory.com/">blog</Link>
                <Link className="link-href" target="_blank" to="//spring-fang-155.notion.site/Tidy-Code-3b8fa188e4e34a95bd5b2299d7ff86bd">resume</Link>
            </nav>
        </div>
    )
}

export default Contact;