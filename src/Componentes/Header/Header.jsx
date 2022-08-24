import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';


export default function Header(){

    return(
        <div className="nav">
            <Link className="buttonScreen" to='/FirstScreen'> FirstScreen </Link>
            <Link className="buttonScreen" to='/SecondScreen'> SecondScreen </Link>
        </div>
    )
}