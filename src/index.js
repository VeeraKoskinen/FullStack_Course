import React from 'react'
import ReactDOM from 'react-dom'
import Unicafe from './Unicafe'
import Anekdootit from './Anekdootit'


const Otsikko = (props) => {
    return (
        <div>
          <h1>{props.kurssi.nimi}</h1>
        </div>
      )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia} </p>
        </div>    
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
            <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
            <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
        </div>    
    )
}

const Yhteensa = (osat) => {
    let maara = 0
    osat.map(osa =>
        maara += osa.tehtavia
    )


    return (
        <div>yhteensä {maara} tehtävää</div>
    )
}


const Kurssi = (kurssi) => {
    return (
        <div> 
            <h1>{kurssi.nimi}</h1>
            <h3>sisältö</h3>
            <ul>
                {kurssi.osat.map(osa =>
                    <li>{osa.nimi}, tehtäviä {osa.tehtavia}</li>
                    )
                }
            </ul>
        </div>
    )
  }

const App = () => {

  const kurssi = { 
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
    }

  return (
      /*<div>
        <Otsikko kurssi={kurssi}/>
        <Sisalto osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
      </div>*/
        <div>
            {Kurssi(kurssi)}
            {Yhteensa(kurssi.osat)}
        </div>    
  ) 
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const copy = anecdotes.slice();
const anecdoteObjects = copy.map((anecdote) => {
    return {
        name: anecdote,
        votes: 0
    }
})

console.log("anecdoteObjects",anecdoteObjects)

ReactDOM.render(

  <App/>,
  document.getElementById('root')
)
