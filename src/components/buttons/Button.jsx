import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'
   
export const Button = ({children,type,buttonStyle,buttonSize,onClick}) => {
     const STYLES = ['btn--primary','btn--secondery']
    const SIZES = ['btn--small' ,'btn--med','btn--large']
    const CheckButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link  className='Button-mobile'>
            <button className={`btn ${CheckButtonStyles} ${checkButtonSizes}`}  onClick={onClick} >
                {children}
            </button>
        </Link>
    );
}
