import BS from '../images/BS.png'
import GS from '../images/GS.png'
import LD from '../images/LD.png'
import {useNavigate} from 'react-router-dom'

export default function Highlights (){
    const navigate = useNavigate();
    return (
        <section className="highlights">
            <div className="highlights-top">
                <h1>This week specials!!</h1>
                <button className="btn" onClick={()=>navigate("/menu")}>Online Menu</button>
            </div>
            <article className="products">
                <article className="product">
                    <img  src={GS} className="product-image" alt="Greek salad" />
                    <div className="product-tag">
                        <h3>Greek salad</h3>
                        <h3>$12.99</h3>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <button>Order a delivery</button>
                </article>
                <article className="product">
                    <img  src={BS} className="product-image" alt="Bruchetta" />
                    <div className="product-tag">
                        <h3>Bruchetta</h3>
                        <h3>$5.99</h3>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <button>Order a delivery</button>
                </article>
                <article className="product">
                    <img src={LD} className="product-image" alt="Lemon Dessert" />
                    <div className="product-tag">
                        <h3>Lemon Dessert</h3>
                        <h3>$5.00</h3>
                    </div>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <button>Order a delivery</button>
                </article>
            </article>
        </section>
    )
}