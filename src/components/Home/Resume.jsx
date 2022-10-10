import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Resume = () => {
    return (<div className="resume">
        <div className="resumeHeading">
            <div className="card">
                <FontAwesomeIcon className={'fh_icon icard'} icon={faEnvelope}/>
            </div>
            <span>Education</span>
        </div>
        <ol className="timeline">
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Thapar Institute of engineering and technology
                </div>
                <span>2021 - current</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Thapar Polytechnic College, Patiala
                </div>
                <span>2018 - 2021</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Paradise International School, Ghagga
                </div>
                <span>2021 - current</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>

        </ol>
        <div className="resumeHeading experience">
            <div className="card">
                <FontAwesomeIcon className={'fh_icon icard'} icon={faEnvelope}/>
            </div>
            <span>Experience</span>
        </div>
        <ol className="timeline">
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Thapar Institute of engineering and technology
                </div>
                <span>2021 - current</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Thapar Institute of engineering and technology
                </div>
                <span>2021 - current</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>
            <li className="timeline_item">
                <div className="timeline_item_title">
                    Thapar Institute of engineering and technology
                </div>
                <span>2021 - current</span>
                <p className="timeline_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    laboriosam laborum placeat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
                    dignissimos, dolorum ducimus est illum libero, magni necessitatibus
                    neque, non odio pariatur perspiciatis quidem sapiente sint tempora
                    temporibus unde veritatis!
                </p>
            </li>

        </ol>

    </div>);
}