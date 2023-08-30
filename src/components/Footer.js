import logo_footer from '../images/logo_footer.png'
import instaicon from '../images/instaicon.png'
import fbicon from '../images/fbicon.png'
import {Link} from 'react-router-dom'

export default function Footer (){
    return (
        <footer>
            <div className="footer-links">
                <img src={logo_footer} width="90" height="180" alt="Little Lemon Logo"/>
                <ul>
                    <li><span>Little Lemon</span></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/online-order'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                <ul>
                    <li><span>Contact Us</span></li>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
                <ul id="sm">
                    <li><a href="https://web.facebook.com/"><img src={fbicon} alt="facebook logo"/></a></li>
                    <li><a href="https://www.instagram.com/"><img src={instaicon} alt="instagram logo"/></a></li>
                </ul>
            </div>
            <div className="copyrights">
                <p>©️ Little Lemon - Copyrights 2023</p>
            </div>
        </footer>
    )
}