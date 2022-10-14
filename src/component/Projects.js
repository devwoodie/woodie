import '../css/Projects.scss';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Projects = ({ projectJson }) => {

    let projectData = projectJson.project;

    return(
        <div className="Project">
            <div className="back-title">
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>S</span>
            </div>
            <div className="contents-head">
                <div className="contents-title">
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                    <span>S</span>
                </div>
            </div>
                <ul className="contents">
                    {projectData.map((project, index) => (
                        <li className="contents-list">
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