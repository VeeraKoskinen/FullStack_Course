import React from 'react'

const precisionRound = (number, precision) => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

const Button = (props) => {
    return (
        <button onClick={props.function}>{props.text}</button>
    )
}

const Statistic = (props) => {
    return (
        <div>{props.name} {props.number} {props.text}</div>
    )
}

const Statistics = (props) => {
    const allAnswers = props.bad + props.ok + props.good
    const average = (props.good - props.bad)/allAnswers
    const percentage = props.good/allAnswers
        
    const name1 = "hyvä: ";
    const name2 = "neutraali: ";
    const name3 = "huono: ";
    return (
        <div>
            <h1>statistiikka</h1>
            <Statistic name={name1} number={props.good}/>
            <Statistic name={name2} number={props.ok}/>
            <Statistic name={name3} number={props.bad}/>
            <Statistic name="keskiarvo: " number={precisionRound(average,2)}/>
            <Statistic name="positiivisia: " number={precisionRound(percentage,2)} text="%"/>
        </div>    

    )
}

class Unicafe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          goodCounter: 0,
          okCounter: 0,
          badCounter: 0  
        }
    }
    
    addOne (countername) { 
        this.setState({[countername]: this.state[countername] + 1})
    }

    reset(counter) {
        this.setState({counter: 0})
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button text="hyvä" function={() => this.addOne("goodCounter")} /> 
                <Button text="neutraali" function={() => this.addOne("okCounter")} />
                <Button text="huono" function={() => this.addOne("badCounter")} />
                <Statistics bad={this.state.badCounter}  good={this.state.goodCounter} ok={this.state.okCounter} />          
            </div>
        )
    }
}


export default Unicafe



