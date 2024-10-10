import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import CarList from '../../components/CarList/CarList';
import SideBur from '../../components/SideBur/SideBur';
import CSS from './Catalog.module.css';
import Container from '../../components/Container/Container';

const Catalog = () => {
    // const [campers, setCampers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <Container>
                {isLoading && <Loader />}
                <div className={CSS.catalog}>
                    <SideBur />
                    <CarList />
                </div>
            </Container>
        </>
    );
};

export default Catalog;
