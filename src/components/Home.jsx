import background from '../assets/images/background/kaliBackground.png';
import folder from '../assets/images/icons/homeFolder.png';
import chrome from '../assets/images/icons/chrome.png';
import '../assets/css/Home.css';
import Draggable from "react-draggable";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faCalendarWeek,
    faLocationDot,
    faCross,
    faXmark,
    faMinus, faTimes
} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import profile from "../assets/images/profile/IMG_4824.JPG";
import {Resume} from "./Home/Resume";
import {About} from "./Home/About";
import {Portfolio} from "./Home/Portfolio";
import {Contact} from "./Home/Contact";
import background1 from '../assets/images/background/kali.jpg';
import background2 from '../assets/images/background/kali2.jpg';
import background3 from '../assets/images/background/kali3.jpg';
import background4 from '../assets/images/background/kali4.jpg';
import background5 from '../assets/images/background/kali5.jpg';
import {Settings} from "./settings/Settings";
import menu from "../assets/images/icons/menu.png"

export function Home() {
    let backgrounds = [
        background,
        background1,
        background2,
        background3,
        background4,
        background5,
    ];
    let homeHeading = ["About Me", "Resume", "Portfolio", "Blog", "Contact"]

    const [navLink, setNav] = useState(0);
    const [selectedBackground, setBackground] = useState(0);
    let [homeFolder, setFolder] = useState(false);
    let [settingsFolder, setSettings] = useState(false);
    return (<>
        <div className="home">
            <div className="maxWidth">
                <div className="folderContainer">
                    <ol className="sideBar">
                        <li className="folder" onClick={() => setSettings(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="48" height="48"
                                 viewBox="0 0 48 48"
                                 style={{fill: "#000000"}}>
                                <path fill="#607D8B"
                                      d="M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"></path>
                                <path fill="#455A64"
                                      d="M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"></path>
                            </svg>

                        </li>
                        <li className="folder">
                            <img className={'folderIcon'} src={chrome} alt=""/>

                        </li>
                        <li className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </li>
                        <li className="folder">
                            <img className={'folderIcon'} src={folder} alt=""/>
                            <div className="folderName">Home</div>

                        </li>
                        <li className="folder">
                            <img className={'folderIcon'} src={menu} alt=""/>
                        </li>

                    </ol>
                    <Draggable>
                        <div onClick={() => {
                            if (homeFolder) {
                                setFolder(false)
                            } else {
                                setFolder(true)

                            }
                        }} className="folder bodyFolder">
                            <img className={'folderIcon'} src={folder}
                                 alt=""/>
                            <div className="folderName">Home</div>
                        </div>
                    </Draggable>
                    <div className="folderCards">
                        {homeFolder ? <div className="folderCard portfolio">
                            <div className="left">
                                <div className="portfolioImg">
                                    <img src={profile} alt=""/>
                                </div>
                                <div className="p_name">
                                    Abhinandan Singla
                                </div>
                                <div className="tagsContainer">
                                    <div className="tags">Selftaught Developer</div>
                                </div>

                                <div className="lineBreak"></div>
                                <div className="contactsContainer">
                                    <div className="cont">
                                        <div className="card">
                                            <FontAwesomeIcon className={'fh_icon icard'} icon={faEnvelope}/>
                                        </div>
                                        <div className="con_heading">
                                            <div>
                                                Email
                                            </div>
                                            abhinandansingla48@gmail.com
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <div className="card">
                                            <FontAwesomeIcon className={'fh_icon icard'} icon={faPhone}/>
                                        </div>
                                        <div className="con_heading">
                                            <div>
                                                Phone
                                            </div>
                                            +919779204835
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <div className="card">
                                            <FontAwesomeIcon className={'fh_icon icard'} icon={faCalendarWeek}/>
                                        </div>
                                        <div className="con_heading">
                                            <div>
                                                BIRTHDAY
                                            </div>
                                            19 APRIL 2002
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <div className="card">
                                            <FontAwesomeIcon className={'fh_icon icard'} icon={faLocationDot}/>
                                        </div>
                                        <div className="con_heading">
                                            <div>
                                                Location
                                            </div>
                                            PATRAN
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="right">
                                <div className="navbar">
                                    <div className="navHeading">
                                        {homeHeading[navLink]}
                                    </div>
                                    <div className="navRight">
                                        <ul>
                                            <li className="navItem"
                                                style={navLink === 0 ? {color: "dodgerblue"} : {}}
                                                onClick={() => setNav(0)}>About
                                            </li>
                                            <li className="navItem"
                                                style={navLink === 1 ? {color: "dodgerblue"} : {}}
                                                onClick={() => setNav(1)}>Resume
                                            </li>
                                            <li className="navItem"
                                                style={navLink === 2 ? {color: "dodgerblue"} : {}}
                                                onClick={() => setNav(2)}>Portfolio
                                            </li>
                                            <li className="navItem"
                                                style={navLink === 3 ? {color: "dodgerblue"} : {}}
                                                onClick={() => setNav(3)}>Blog
                                            </li>
                                            <li className="navItem"
                                                style={navLink === 4 ? {color: "dodgerblue"} : {}}
                                                onClick={() => setNav(4)}>Contact
                                            </li>
                                            <li className="navItem"
                                                onClick={() => setFolder(false)}><FontAwesomeIcon icon={faXmark}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {navLink === 0 ? <About/> : ''}
                                {navLink === 1 ? <Resume/> : ""}
                                {navLink === 2 ? <Portfolio/> : ""}
                                {navLink === 4 ? <Contact/> : ""}
                            </div>
                        </div> : ""}
                        {settingsFolder ? <Settings backgrounds={backgrounds} selectedBackground={selectedBackground}
                                                    setBackground={setBackground}
                                                    settingsFolder={setSettings}/> : ''}
                    </div>
                </div>
                <div className="background">
                    <img src={backgrounds[selectedBackground]} alt=""/>
                </div>

            </div>
        </div>
    </>);
}