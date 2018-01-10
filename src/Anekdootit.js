import React from 'react'
import ReactDOM from 'react-dom'



const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(6))
}

const RandomButton = (props) => {
    return (
        <button onClick={props.function}>Arvo uusi anekdootti!</button>
    )
}

class Anekdootit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    setSelected = () => {
        const randomi = getRandomInt(6)
        this.setState({selected: randomi})
    }

    render() {
        return (
          <div>         
            <RandomButton function={this.setSelected}/>  
            <p>{this.props.anecdotes[this.state.selected]}</p>
          </div>
        )
      }
}

export default Anekdootit