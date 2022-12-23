import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFlask } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


function Sidebar() {
    const [navbarActive, setNavbarActive] = useState(false);
    const navbarHandler = event => [
        setNavbarActive(current => !current)
    ]
    return (
        <Col className={`sidebar ${navbarActive ? 'open' : 'dissapear'}`}>
            <div className="logo-details" onClick={navbarHandler}>
                <i className='bx bx-info-circle icon'><FontAwesomeIcon icon={faFlask} /></i>
                <div className="logo_name">ItbDeLabo</div>
                <i className='bx bx-menu' id="btn"><FontAwesomeIcon icon={faBars} /></i>
            </div>
            <ul className="nav-list">
                <li onclick="openTab(event, 'battery-status')">
                    <a>
                        <i className="fa-solid fa-battery-empty  fa-2xl"></i>
                        <span className="links_name">Battery Status</span>
                    </a>
                    <span className="tooltip">Battery Status</span>
                </li>
                <li onclick="openTab(event, 'daily-report')">
                    <a >
                        <i className="fa-solid fa-calendar-day  fa-2xl"></i>
                        <span className="links_name">Daily</span>
                    </a>
                    <span className="tooltip">Daily</span>
                </li>
                <li onclick="openTab(event, 'monthly-report')">
                    <a >
                        <i className="fa-solid fa-calendar-days  fa-2xl"></i>
                        <span className="links_name">Monthly</span>
                    </a>
                    <span className="tooltip">Monthly</span>
                </li>
                <li onclick="openTab(event, 'yearly-report')">
                    <a >
                        <i className="fa-solid fa-calendar  fa-2xl"></i>
                        <span className="links_name">Yearly</span>
                    </a>
                    <span className="tooltip">Yearly</span>
                </li>
                <li onclick="openTab(event, 'events')">
                    <a >
                        <i className="fa-solid fa-calendar-check  fa-2xl"></i>
                        <span className="links_name">Events</span>
                    </a>
                    <span className="tooltip">Events</span>
                </li>
            </ul>
        </Col>
    )
}

export default Sidebar;