import React from 'react';
import './button.css';
import{Link} from 'react-router-dom';

const STYLES = ['btn--primary' , 'btn--outline'];

const  SIZES=['btn--medium' ,'btn--large'];




export const Button =({
    children,
    type,
    onClick,
    buttonstyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonstyle) ? buttonstyle: STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
return (
<Link to='/signup' className='btn-mobile'>
    <button className={`btn ${checkButtonStyle}  ${checkButtonStyle}`}
    onclick={onclick}
    type={type}>
{children}
    </button>
</Link>

)

};


