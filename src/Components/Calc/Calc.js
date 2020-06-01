import React from 'react';
import classes from "./Calc.module.scss";
import classNames from 'classnames';

class Calc extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state){
        return { rate: props.rate};
    }

    CalcRate = (e) =>{
        e.preventDefault();
        let elements = e.target.elements;
        let CountCurrency = elements["count-currency"].value;
        let TypeCurrency = elements["type-currency"].value;
        this.setState({ result: (CountCurrency / this.state.rate[TypeCurrency]).toFixed(2) })
    };

    render(){
        return (
            <div className={classes.calculator}>
                <h3>Exchange calculator</h3>
                <div className={classes.block}>
                    <div className={classes.iWant}>I want</div>
                    <div>
                        <form onSubmit={this.CalcRate} className={classes.decor}>


                            <div className={classes.formLeftDecoration}></div>
                            <div className={classes.formRightDecoration}></div>
                            <div className={classes.circle}></div>
                            <div className={classes.formInner}>
                                <input className={classes.valueIn} type="number" name="count-currency" defaultValue="150"/>
                                <div className={classes.optionS}>
                                    <span className={classNames(classes.customDropdown, classes.big)}>
                                        <select name="type-currency">
                                        {Object.keys(this.props.rate).map((keyName, i) =>(
                                            <option key={keyName} value={keyName}>{keyName}</option>
                                        ))}
                                    </select>
                                    </span>

                                </div>

                                <input type="submit" value="Result"/>
                            </div>

                        </form>
                    </div>
                    <div>
                        <h4 className={classes.iWant}>Result</h4>
                        <ul className={classes.calcRes}>
                            <li>EUR {this.state.result}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;