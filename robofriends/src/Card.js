import React from "react";

const Card = (props) => {
    const { name , email, id } = props;
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