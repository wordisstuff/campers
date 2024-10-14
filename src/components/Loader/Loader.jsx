import getRandomColor from '../../services/getRandomColor';
import CSS from './Loader.module.css';
import { Watch } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={CSS.loader}>
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color={getRandomColor()}
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;
