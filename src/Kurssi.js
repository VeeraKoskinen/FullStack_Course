import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (kurssi) => {
    return (
        <div> 
            <h1>{kurssi.nimi}</h1>
            <h3>sisältö</h3>
            <ul>
                {kurssi.osat.map(osa =>
                    <li key={osa.id}>{osa.nimi}, tehtäviä {osa.tehtavia}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Kurssi