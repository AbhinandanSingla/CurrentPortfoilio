import '../assets/css/Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWifi, faVolumeHigh, faBattery} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
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
            <div className="navRight">
                <div className="dateTime navTab">
                    Sat 7:00 PM
                </div>
                <div className="connectivityTab navTab">
                    <FontAwesomeIcon icon={faWifi} className={"navIcon"} />
                    <FontAwesomeIcon icon={faVolumeHigh} className={"navIcon"}/>
                    <FontAwesomeIcon icon={faBattery} className={"navIcon"}/>
                </div>
                <div className="powerTab navTab">

                </div>
            </div>

        </div>
    </div>);
}