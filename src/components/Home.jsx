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
    faMinus, faTimes, faMouse, faComputerMouse
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
import {SideBar} from "./SideBar/SideBar";
import lockscreen from '../assets/images/lockscreen/lockscreen1.jpg';
import lockscreen1 from '../assets/images/lockscreen/lockscreen2.jpg';
import {LockScreen} from "./Lockscreen";

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
                    <SideBar setSettings={setSettings}/>
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
                    <figure>
                        <img src={backgrounds[selectedBackground]} alt=""/>
                    </figure>
                </div>
                <LockScreen/>
            </div>
        </div>
    </>);
}