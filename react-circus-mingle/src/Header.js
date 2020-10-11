import React from 'react'
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";

import CircusLogo from './img/CircusMingle.png';

function Header(){
    return(
        //BEM
        <div className="header">
            <IconButton>
                <FaceIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo"
             src={CircusLogo} 
             alt="CircusMingle Logo"></img>
            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header