import {useState} from "react";
import project from "../../assets/images/images/project.jpg";

export const Portfolio = () => {
    const [filter, setFilter] = useState(0);
    return (<div className={"projects"}>
        <ul className="filter_list">
            <li className="filter_item" onClick={() => setFilter(0)}
                style={filter === 0 ? {color: "dodgerblue"} : {}}>All
            </li>
            <li className="filter_item" onClick={() => setFilter(1)}
                style={filter === 1 ? {color: "dodgerblue"} : {}}>Web development
            </li>
            <li className="filter_item" onClick={() => setFilter(2)}
                style={filter === 2 ? {color: "dodgerblue"} : {}}>Android development
            </li>
            <li className="filter_item" onClick={() => setFilter(3)}
                style={filter === 3 ? {color: "dodgerblue"} : {}}>Blockchain
            </li>
        </ul>
        <div className="project_list">
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>
            <div className="project_item">
                <figure className={"project_img"}>
                    <img src={project} alt=""/>
                </figure>
                <h4 className={"projectHeading"}>Finance</h4>
                <h5 className={"project_subheading"}>Web Development</h5>
            </div>

        </div>
    </div>);
}