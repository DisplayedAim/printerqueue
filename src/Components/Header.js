import React from "react";
import Classes from "../Style/header.module.css";
import arrow from "../Assets/arrowDown.png";
import bell from "../Assets/bell.png";
import logout from "../Assets/logout.png";


class Header extends React.Component{
    render(){
        return (
            <header className={Classes.header}>
                <div className={Classes.names}>
                    <p className={Classes.name}>Amer Al Kinani</p>
                    <p className={Classes.type}>Student</p>
                </div>
                <img className={Classes.images} src={arrow} alt="dropdown"/>
                <div className={Classes.border}>
                    <img className={Classes.images} src={bell} alt="notifications"/>
                    <img className={Classes.images} src={logout} alt="logout"/>
                </div>
            </header>
        );
    }
}

export default Header;