import React from 'react'



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

    precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }

    statistics() {
        const allAnswers=this.state.badCounter + this.state.okCounter + this.state.goodCounter
        const average=(this.state.goodCounter - this.state.badCounter)/allAnswers
        const percentage=this.state.goodCounter/allAnswers
        return (
            <div>
                <h1>statistiikka</h1>
                <div>hyvä: {this.state.goodCounter}</div>
                <div>neutraali: {this.state.okCounter}</div>
                <div>huono: {this.state.badCounter}</div>
                <div>keskiarvo: {this.precisionRound(average,2)}</div>
                <div>positiivisia: {this.precisionRound(percentage,2)} %</div>
            </div>    
        )
    }


    render() {
        return (
            <div>
                <h1>anna palautetta</h1>               
                <button onClick={() => this.addOne("goodCounter")}>hyvä</button>
                <button onClick={() => this.addOne("okCounter")}>neutraali</button>
                <button onClick={() => this.addOne("badCounter")}>huono</button>
                {this.statistics()}           
            </div>
        )
    }
}


export default Unicafe



