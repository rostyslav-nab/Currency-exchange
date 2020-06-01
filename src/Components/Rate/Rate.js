import React from 'react';
import './Rate.module.scss';
import classNames from 'classnames';
import classes from "./Rate.module.scss";
import Calc from "../Calc/Calc";

class Rate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        };
        this.currency = [
            'USD', 'RUB', 'PHP', 'CAD'
        ];
        this.getRate();
    }

    getRate = () =>{
        fetch("https://api.exchangeratesapi.io/latest")
            .then(data=>{
                return data.json();
            })
            .then(data=>{
                this.setState({date: data.date});
                let result = {};
                for(let i = 0; i < this.currency.length; i++){
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({currencyRate: result});
            })
    };

    render(){
        return (
            <div className={classes.rate}>
                <h3>Exchange rate for {this.state.date}</h3>
                <div className={classNames(classes.block, classes.flexContainer)}>
                    {Object.keys(this.state.currencyRate).map((keyName, i) =>(
                        <div className={classNames(classes.block, classes.flexItem)} key={keyName}>
                            <div className={classes.currencyName}>{keyName}</div>
                            <div className={classes.currencyIn}>{this.state.currencyRate[keyName].toFixed(2)}*</div>
                            <p>* can be bought for 1 EUR</p>
                        </div>
                    ))}
                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        );
    }
}

export default Rate;