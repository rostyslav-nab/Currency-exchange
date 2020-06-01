import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Rate from "./Components/Rate/Rate";
import About from "./Components/About/About";


const App = () =>{

    return (
        <div className='site'>

            <Header/>
            <div className="container">
                <main>
                    <Rate/>
                    {/*<Router>*/}
                    {/*    <Suspense fallback={<div>Loading...</div>}/>*/}
                    {/*    <Switch>*/}
                    {/*        /!*<Route exact path="/" component={Rate}/>*!/*/}
                    {/*        <Route path="/about" component={About}/>*/}
                    {/*    </Switch>*/}
                    {/*</Router>*/}
                </main>
            </div>
            <div className="container" id="cookie_info">
                <div className="site-content">
                    <About/>
                    <div className="well">
                        We use cookies on our website to collect technical information
                    </div>
                </div>
            </div>
        <Footer/>


        </div>
    );
  };


export default App;
