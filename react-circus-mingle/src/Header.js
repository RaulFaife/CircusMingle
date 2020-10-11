import React from 'react'
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";

import CircusLogo from './img/CircusMingle.png';
import CircusLogo2 from './img/CircusMingle2.png';

function Header(){
    return(
        //BEM
        <div className="header">
            <IconButton>
                <FaceIcon fontSize="large" className="header__icon" />
            </IconButton>
            
            <Link to="/">
            <img className="header__logo"
             src={CircusLogo2} 
             alt="CircusMingle Logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header