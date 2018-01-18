import React from 'react'
import ReactDOM from 'react-dom'
import Unicafe from './Unicafe'
import Anekdootit from './Anekdootit'
import Kurssi from './Kurssi'

const Yhteensa = (osat) => {
    let maara = osat.reduce(function (edellinen, osa) {
               return edellinen + osa.tehtavia;
            }, 0);     
    return (
        
        <div>yhteensä {maara} tehtävää</div>
    )
}

const Kurssit = (kurssit)  => {
    return (
        <div>
            {kurssit.map((kurssi) => {
                return (
                    <div key={kurssi.id}>
                        {Kurssi(kurssi)}
                        {Yhteensa(kurssi.osat)} 
                    </div>
                )
            })}
         
        </div>    
    )
}








const App = () => {

  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

    return (
        <div>
            {Kurssit(kurssit)}
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
