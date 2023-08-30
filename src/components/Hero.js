import {useNavigate} from 'react-router-dom'
import heroimg from '../images/restaurantfood.png';

export default function Hero (){
    const navigate = useNavigate();
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a family-owned<br/> Mediterranean restaurant, focused on traditional recipes<br/> served with a modern twist.</p>
                <button className='btn' onClick={()=>navigate("/reservations")}>Reserve a table</button>
            </div>
            <div className="hero-img">
                <img id="hero-img" src={heroimg} alt='restaurant food'/>
            </div>
        </section>
    )
}