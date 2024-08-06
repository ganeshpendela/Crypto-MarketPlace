import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import arrow_icon from '../../assets/arrow_icon.png'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext'
import './Navbar.css'

const Navbar = () => {

const {setCurrency} = useContext(CoinContext)  
const location = useLocation();

const currencyHandler = (event)=>{
    switch(event.target.value){
        case "usd":{
            setCurrency({name:"usd", symbol:"$"})
            break
        }
        case "eur":{
            setCurrency({name:"eur", symbol: '€' })
            break
        }
        case "inr":{
            setCurrency({name:"inr",symbol: '\u20B9'})
            break
        }
        default :{
            setCurrency({name:"usd", symbol:"$"})
            break
        }
    }
}


return (
    <div className='navbar'>
        <Link to = {'/'}>
            <img src={logo} alt="Logo" className='logo' />
        </Link>
        
        <ul>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}><li>Home</li></Link>
        <Link to='#' className={location.pathname.startsWith('/coin/') ? 'active' : ''}><li>Features</li></Link>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>                
                <option value="eur">EUR</option>                
                <option value="inr">INR</option>                
            </select>
            <button>Sign up <img src={arrow_icon} alt="arrow icon" /></button>
        </div>
    </div>
)
}

export default Navbar
