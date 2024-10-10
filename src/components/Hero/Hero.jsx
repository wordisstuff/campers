import Container from '../Container/Container';
import CSS from './Hero.module.css';
const Hero = () => {
    return (
        <section className={CSS.hero}>
            <Container className={CSS.container}>
                <div className={CSS.heroBox}>
                    <h1>Campers of your dreams</h1>
                    <h2>You can find everything you want in our catalog.</h2>
                    <a href="/catalog" className={CSS.btn}>
                        View Now
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
