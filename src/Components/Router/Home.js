import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import App from "../../App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rate from "../Rate/Rate";


const Home = () =>{

    return (
        <div className='site'>

            <Header/>
            <Rate/>
            <div className="container" id="cookie_info">
                <div className="site-content">
                    <div className="well">
                        We use cookies on our website to collect technical information
                    </div>
                </div>
            </div>
            <Footer/>


        </div>

    );
};


export default Home;
