import chrome from "../../assets/images/icons/chrome.png";
import folder from "../../assets/images/icons/homeFolder.png";
import menu from "../../assets/images/icons/menu.png";
import {useContext} from "react";
import {DataContext} from "../../hooks/DataProvider";

export const SideBar = (props) => {

    return (<ol className="sideBar">
            <li className="folder" onClick={() => props.setSettings(true)}>
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
    );
}