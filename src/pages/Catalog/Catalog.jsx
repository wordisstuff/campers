import Loader from '../../components/Loader/Loader';
import CarList from '../../components/CarList/CarList';
import SideBur from '../../components/SideBur/SideBur';
import CSS from './Catalog.module.css';
import Container from '../../components/Container/Container';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/campers/selectors';

const Catalog = () => {
    const Loading = useSelector(selectLoading);
    return (
        <>
            <Container>
                {Loading && <Loader />}
                <div className={CSS.catalog}>
                    <SideBur />
                    <CarList />
                </div>
            </Container>
        </>
    );
};

export default Catalog;
