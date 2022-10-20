import '../css/Projects.scss';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDragIndicator, MdDragHandle } from 'react-icons/md'
import {useState} from "react";

const Projects = ({ projectJson }) => {

    let [projectData, setProjectData] = useState(projectJson.project);

    const handleEnd = (result) => {
        if(!result.destination) return;

        const newProjectData = [...projectData];

        const [reorderProject] = newProjectData.splice(result.source.index, 1);
        newProjectData.splice(result.destination.index, 0, reorderProject);
        setProjectData(newProjectData);
    };

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
                <div>
                    <DragDropContext onDragEnd={handleEnd}>
                        <Droppable droppableId="projects"  /*direction="horizontal"*/>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="contents">
                                    {projectData.map((project, index) => (
                                    <Draggable
                                        key={project.id}
                                        draggableId={project.id.toString()}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className={`${snapshot.isDragging ? 'dragging':''} contents-list`}
                                                key={project.id}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                                {...provided.dragHandleProps}
                                            >
                                                <a target="_blank" href={`https://github.com/devwoodie/${project.git}`}>
                                                    <span className="contents-tit">{project.title}</span>
                                                    <span className="contents-sub">{project.sub}</span>
                                                    <span className="contents-date">{project.type}</span>
                                                    <MdDragIndicator className="drag-indicator" />
                                                </a>
                                            </div>
                                        )}
                                    </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
        </div>
    )
};

export default Projects;