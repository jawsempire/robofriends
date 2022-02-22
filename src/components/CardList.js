import React from 'react';

import Card from './Card';

import "../styles/CardList.css"

//  ( { this is destructuring })
const CardList = ({robots}) => {
   
    /*robots.map((robot, i) => {
                // alternative:
                {/*  return <Card id = {robots[i].id} name= {robots[i].name} email= {robots[i].email} />
     */
                
    if (true) {
        throw new Error("the humanity!");
    }    
    return (
        <div className="cardList">
            {
                robots.map((robot, i) => {  
                return <Card key= {robot.id}
                         id={robot.id}
                         name={robot.name}
                         email={robot.email} />
                 })
            }
        </div>
    )
}


export default CardList