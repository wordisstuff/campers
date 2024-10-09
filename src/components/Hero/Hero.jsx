import CSS from './Hero.module.css';
const Hero = () => {
    return (
        <section className={CSS.hero}>
            <div className={CSS.heroBox}>
                <h1>Campers of your dreams</h1>
                <p>You can find everything you want in our catalog.</p>
                <a href="/" className={CSS.btn}>
                    View Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
