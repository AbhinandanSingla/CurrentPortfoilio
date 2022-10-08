import background from '../assets/images/background/kaliBackground.png';
import folder from '../assets/images/icons/homeFolder.png';
import '../assets/css/Home.css';
import Draggable from "react-draggable";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faWindowMaximize, faTimes} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

export function Home() {
    let [homeFolder, setFolder] = useState(false);
    return (<>
        <div className="home">
            <div className="maxWidth">
                <div className="folderContainer">
                    <div className="sideBar">
                        <div className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </div>
                        <div className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </div>
                        <div className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </div>
                        <div className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </div>

                    </div>
                    <Draggable>
                        <div onClick={() => setFolder(true)} className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </div>
                    </Draggable>
                    <div className="folderCards">
                        {homeFolder ? <div className="folderCard">
                            <div className="folderHeader">
                                <div className="fh_logo">
                                    <img src={folder} alt=""/>
                                </div>
                                <div className="fh_heading">Home</div>
                                <div className="fh_btns">
                                    <FontAwesomeIcon className={'fh_icon'} icon={faMinus}/>
                                    <FontAwesomeIcon className={'fh_icon'} icon={faWindowMaximize}/>
                                    <FontAwesomeIcon className={'fh_icon'} icon={faTimes}/>
                                </div>
                            </div>
                        </div> : ""}
                    </div>
                </div>
                <div className="background">
                    <img src={background} alt=""/>
                </div>

            </div>
        </div>
    </>);
}