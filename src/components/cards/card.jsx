import React from 'react'
import './card.css'

const STYLE = ['card--primary','card--secondery']
const SIZE = ['card--default','card--large','card--small']
export const Card = ({children,type,cardstyle,cardsize,onclick}) => {

    const checkcardstyle = STYLE.includes(cardstyle) ? cardstyle : STYLE[0];
    const checkcardsize = SIZE.includes(cardsize) ? cardsize : SIZE[0];
    return (
        <div className={`card ${cardstyle} ${cardsize} `} onclick={onclick}>
                   {children}
        </div>
    )
}
