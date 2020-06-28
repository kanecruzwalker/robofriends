import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return(
        <Card id ={robots[0].id } name = {robots[0].name} email = {robots[0].email}/>
    );
}

export default  CardList;