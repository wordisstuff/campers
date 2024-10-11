import clsx from 'clsx';
import CSS from './CheckBox.module.css';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/campers/slice';

const CheckBox = ({ query }) => {
    const dispatch = useDispatch();
    const keys = Object.keys(query)[0];
    const handleClick = e => {
        e.preventDefault();
        dispatch(setQuery({ [keys]: !query[keys] }));
    };

    console.log(query[keys]);

    return (
        <div>
            <button
                className={clsx(query[keys] && CSS.checked)}
                onClick={handleClick}
            >
                {keys}
            </button>
        </div>
    );
};

export default CheckBox;
