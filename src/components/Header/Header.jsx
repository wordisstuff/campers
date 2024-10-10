import { NavLink, useLocation } from 'react-router-dom';
import CSS from './Header.module.css';

const Header = () => {
    const activ = useLocation();
    return (
        <>
            <header className={CSS.header}>
                <div className={CSS.container}>
                    <div className={CSS.logo}>
                        <a href="/">TravelTrucks</a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a className={activ.pathname === '/'? CSS.activ:''} href="/">Home</a>
                            </li>
                            <li>
                                <a  className={activ.pathname === '/catalog'? CSS.activ:''} href="/catalog">Catalog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
