import Container from '../Container/Container';
import CSS from './Hero.module.css';
const Hero = () => {
    return (
        <section className={CSS.hero}>
        <Container className={CSS.container} >
            <div className={CSS.heroBox}>
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog.</p>
                <a href="/" className={CSS.btn}>
                    View Now
                </a>
            </div>
        </Container>
        </section>
    );
};

export default Hero;
