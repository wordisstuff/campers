import getRandomColor from '../../services/getRandomColor';
import CSS from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={CSS.loader}>
            render(
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color={getRandomColor()}
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;
