import '../assets/css/Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWifi, faVolumeHigh, faBattery, faPowerOff} from '@fortawesome/free-solid-svg-icons'
import Calendar from "react-calendar";
import {useContext, useState} from "react";
import 'react-calendar/dist/Calendar.css';
import '../assets/css/Calender.css'
import {DataContext} from "../hooks/DataProvider";

export const Navbar = () => {
    const {setLock} = useContext(DataContext);
    const [value, onChange] = useState(new Date());
    const [showDate, setShowDate] = useState(false);


    return (<div className={'navbar'}>
        <div className="maxWidth">
            <div className="navLeft">
                <div className="navTab">
                    Applications
                </div>
                <div className="navTab">
                    Places
                </div>
            </div>
            <div className="dateTime navTab" onClick={() => {
                if (showDate) {
                    setShowDate(false)
                } else {
                    setShowDate(true)
                }
            }}>
                Sat 7:00 PM
                {showDate ? <div className="dateTimeContainer">
                    <Calendar onChange={onChange} value={value}/>
                </div> : ""}
            </div>
            <div className="navRight">

                <div className="connectivityTab navTab">
                    <FontAwesomeIcon icon={faWifi} className={"navIcon"}/>
                    <FontAwesomeIcon icon={faVolumeHigh} className={"navIcon"}/>
                    <FontAwesomeIcon icon={faBattery} className={"navIcon"}/>
                </div>
                <div className="powerTab navTab">
                    <FontAwesomeIcon icon={faPowerOff} className={"navIcon"} onClick={() => setLock(true)}/>
                </div>
            </div>

        </div>
    </div>);
}