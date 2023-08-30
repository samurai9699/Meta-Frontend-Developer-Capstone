import U1 from '../images/U1.png'
import U2 from '../images/U2.png'
import U3 from '../images/U3.png'

export default function Testimonial (){
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <article className="reviews">
                <article className="review">
                    <img src={U1} alt="user review" />
                    <p>Thank you for dinner last night. It was amazing!! I have to say it's the best meal I have had in quite some time.</p>
                    <div><h3>Micheal</h3></div>
                </article>
                <article className="review">
                    <img src={U2} alt="user review" />
                    <p>My birthday party was better and even more “delicious” than I had hoped. Stephane and staff made everyone feel at home as soon as they walked in the door</p>
                    <div><h3>Fatima</h3></div>
                </article>
                <article className="review">
                    <img src={U3} alt="user review" />
                    <p>Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy - what a bargain. I will be back soon.</p>
                    <div><h3>Maria</h3></div>
                </article>
            </article>
        </section>
    )
}