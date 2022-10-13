import '../css/Projects.scss';

const Projects = ({ projectJson }) => {

    let projectData = projectJson.project;

    return(
        <div className="Project">
            <div className="contents-head">
                <span className="contents-title projects">Projects</span>
            </div>
            <ul className="contents">
                {projectData.map((project, index) => (
                    <li className="contents-list" key={index}>
                        <a target="_blank" href={'https://github.com/devwoodie/'+project.git}>
                            <span className="contents-tit">{project.title}</span>
                            <span className="contents-sub">{project.sub}</span>
                            <span className="contents-date">{project.type}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Projects;