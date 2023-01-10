import React, { useState } from 'react'
import './Header.scss'

function Header() {
    const [navMenu,setNavMenu] = useState(false)
    const HeaderBurger = () => {
        navMenu?
        setNavMenu(false):
        setNavMenu(true)
    }
    return (
        <div className='Header'>
            <div className="Header__container">
                <div className="Burger" onClick={()=>HeaderBurger()}>
                    <span></span>
                </div>
            </div>
            <div className={navMenu?'Header__nav':'Header__nav active'} onClick={()=>HeaderBurger()}>
                <div className="Header__nav--container" onClick={(e)=>e.stopPropagation()}>
                    <div className="Burger__close--container">
                    <div className="Burger__close" onClick={()=>HeaderBurger()}>
                        <span></span>
                    </div>
                    </div>
                    <nav className="Header__nav--list">
                        <ul className='Header__nav--items'>
                            <li className='Header__nav--item'>Page 1</li>
                            <li className='Header__nav--item'>Page 1</li>
                            <li className='Header__nav--item'>Page 1</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header