import React from "react";
import Cards from "./Cards";

const CardList = ({moviesData}) => {
    console.log(moviesData)
    
    return(
        <div>
{moviesData.map((el)=><Cards el={el}/>)}
        </div>
    )
}

export default CardList