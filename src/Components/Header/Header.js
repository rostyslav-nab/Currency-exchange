import React from 'react';
import classes from './Header.module.scss';
import Nav from "../Nav/Nav";
class Header extends React.Component{
    render(){
        return (
            <header>
                <div className={classes.mainHeader}>
                    <div className={classes.container}>
                        <div className={classes.siteTitle}>
                            <img src="https://img.icons8.com/dusk/64/000000/cash-in-hand.png"/>
                            <h1>Currency exchange by Rostyslav</h1>
                        </div>
                    </div>
                </div>
                <Nav/>
            </header>
        );
    }
}

export default Header;