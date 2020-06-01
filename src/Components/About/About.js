import React from 'react';
import classes from './About.module.scss';

class About extends React.Component
{
    render() {
        return (
            <div className={classes.about}>
                <h1>I'm Rostyslav, Front-End Developer from Kyiv</h1>
                <p>
                    This site was created in 1 day using React. The site receives data on current exchange
                    rates using the free API from  <a href="https://exchangeratesapi.io/">https://exchangeratesapi.io/</a>
                    and displays the ratio to the purchase of currency
                    per unit of EUR. Base currencies easily change in code. The decoration and design was done
                    independently. The code did not use third-party CSS libraries. The site is currently not responsive.
                    Creator Rostyslav Nabok. Thank you for the attention!
                </p>
                <h4>P.S. I am looking for work Front-end developer in Kyiv or remotely, all my contacts are in the footer of the site</h4>
            </div>
        );
    }
}

export default About;