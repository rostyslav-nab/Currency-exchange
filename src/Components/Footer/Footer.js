import React from 'react';
import classes from './Footer.module.scss';

class Footer extends React.Component{
    render(){
        return (
            <footer id="footer" className={classes.footer}>
                <div className={classes.footerBottom}>
                    <div className={classes.container}>
                        <div className={classes.flexContainer}>
                            <div className={classes.flexItem}>
                                <h1 className={classes.footerTitle}>
                                        ©2020 React
                                </h1>
                                <p>All Right Reserved</p>
                            </div>
                            <div className={classes.flexItem}>
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="https://kyiv.codes/" target="_blank" rel="noopener noreferrer">My Site Resume</a></li>
                                        <li><a href="https://drive.google.com/file/d/1I5RZSfjgYD0tXwZV0F_m6f54hl9Xgt8l/view" target="_blank" rel="noopener noreferrer">My CV</a></li>

                                    </ul>
                                </div>
                            </div>

                            <div className={classes.flexItem}>
                                <div className="module-body">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/b-deppo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                        <li><a href="https://www.facebook.com/rostyslav.nabok.9" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                        <li><a href="https://www.instagram.com/b.deppo/?hl=ru" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                        <li><a href="https://github.com/rostyslav-nab" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                        <li><a href="tel:+380507544969">Call me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;