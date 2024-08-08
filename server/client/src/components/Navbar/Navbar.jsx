import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';
import { CoinContext } from '../../context/CoinContext';
import './Navbar.css';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const { isAuthenticated, login, logout } = useAuth();
  const location = useLocation();

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      }
      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      }
      default: {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
    }
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
    });

    if (response.ok) {
      login();
    } else {
      console.error('Login failed');
    }
  };

  const handleLogout = async () => {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'POST',
    });

    if (response.ok) {
      logout();
    } else {
      console.error('Logout failed');
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='Logo' className='logo' />
      </Link>

      <ul>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
          <li>Home</li>
        </Link>
        <Link to='#' className={location.pathname.startsWith('/coin/') ? 'active' : ''}>
          <li>Features</li>
        </Link>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='inr'>INR</option>
        </select>
        <button onClick={isAuthenticated ? handleLogout : handleLogin}>
          {isAuthenticated ? 'Logout' : 'Login as Guest'}
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
