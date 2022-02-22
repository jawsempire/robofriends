import React from 'react';
// import './index.css'

const Card = ({id,name,email}) => {

    // const {name, email} = props

    // jsx returns only one parent (all inside a div)
    return (
        <div className="allCards">
            <div className="grow card tc br3 pa3 ma2 dib bw2 shadow-5">
                <img src={`https://robohash.org/${id}?size=200x200`} alt=""/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    )
}

export default Card
