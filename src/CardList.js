import React from "react"
import Card from "./Card"



function CardList({robots}){

    return(
        <div>
            {   
            robots.map((user,id) =>{
                return(
                    <Card 
                        key={id}
                        id={"ccc" + robots[id].id} 
                        name={robots[id].name} 
                        email={robots[id].email}/> 
            )})}
        </div> 
    )
}

export default CardList