import React from 'react'
import ReactDOM from 'react-dom'


const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(6))
}

const Button = (props) => {
    return (
        <button onClick={props.function}>{props.name}</button>
    )
}

class Anekdootit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            mostVoted: this.props.anecdotes[0]
        }
    }

    setSelected = () => {
        const randomi = getRandomInt(6)
        this.setState({selected: randomi})
    }

    vote = () => {
        this.props.anecdotes[this.state.selected].votes += 1
        console.log(this.props.anecdotes[this.state.selected].votes)
        this.theMostVoted(this.props.anecdotes[this.state.selected])
        this.forceUpdate()
    }

    theMostVoted = (lastVoted) => {
        if (this.state.mostVoted.votes <= lastVoted.votes) {
            this.setState({mostVoted: lastVoted})
        } 
        return this.state.mostVoted
    }

    BestAnecdote = () => {
        return (
            <div>
                <b>anecdote with most votes:</b>
                <p>{this.state.mostVoted.name}</p>
                <p>Has {this.state.mostVoted.votes} votes</p>
            </div>    
        )
    }

    render() {
        return (
          <div>          
            <p>{this.props.anecdotes[this.state.selected].name}</p>
            <p>Has {this.props.anecdotes[this.state.selected].votes} votes</p>
            <Button function={this.vote} name="vote"/>
            <Button function={this.setSelected} name="next anecdote"/>        
            {this.BestAnecdote()}
          </div>
        )
    }
}

export default Anekdootit