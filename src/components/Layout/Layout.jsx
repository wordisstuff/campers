import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import Container from '../Container/Container';
import CSS from './Layout.module.css';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <header className={CSS.header}>
                    <Container className={CSS.container}>
                        <Header />
                    </Container>
                </header>
                <main>
                    <Outlet />
                </main>
            </Suspense>
            <Toaster position="top-right" reverseOrder={true} />
        </>
    );
};

export default Layout;
