import React from "react";

const Card = ({ name , email, id }) => {
    return(
       <div>
            <img src={`https://robohash.org/${id}`} alt="robots" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
       </div> 
    );
}

export default Card;