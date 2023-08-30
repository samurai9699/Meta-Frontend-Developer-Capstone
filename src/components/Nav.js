import logo from '../images/logo.png';
import {Link} from 'react-router-dom'

export default function Nav (){
    const toggleButton = ()=> {
        const navbarList = document.getElementsByClassName('navbar-list')[0]
        navbarList.classList.toggle('active')
    }
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'><img id="logo" src={logo} alt="Little Lemon Logo"/></Link>
            </div>
            <button onClick={toggleButton} className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
            </button>
            <div className='navbar-links'>
                <ul className='navbar-list'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/menu'>MENU</Link></li>
                    <li><Link to='/reservations'>RESERVATIONS</Link></li>
                    <li><Link to='/online-order'>ORDER ONLINE</Link></li>
                    <li><Link to='/login'>LOGIN</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
