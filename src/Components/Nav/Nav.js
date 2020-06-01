import React from 'react';
import './Nav.module.scss';
import classes from "./Nav.module.scss";
import {Link} from "react-router-dom";

const Nav = () =>{
        return (
            <div className={classes.headerNav}>
                <div className={classes.container}>
                    <nav>
                        <ul>
                            <li><a href="/">Main</a></li>
                            <li><a href="/about">Contacts & Info</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
};

export default Nav;