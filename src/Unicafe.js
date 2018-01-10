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


    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                
                <button onClick={() => this.addOne("goodCounter")}>hyvä</button>
                <button onClick={() => this.addOne("okCounter")}>neutraali</button>
                <button onClick={() => this.addOne("badCounter")}>huono</button>

                <h1>statistiikka</h1>
                <div>hyvä: {this.state.goodCounter}</div>
                <div>neutraali: {this.state.okCounter}</div>
                <div>huono: {this.state.badCounter}</div>
            </div>
        )
    }
}

export default Unicafe



