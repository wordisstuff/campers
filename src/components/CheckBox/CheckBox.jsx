import clsx from 'clsx';
import CSS from './CheckBox.module.css';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/campers/slice';
import { icons } from '../../media/icons/index';

const CheckBox = ({ query }) => {
    const dispatch = useDispatch();
    const keys = Object.keys(query)[0];
    const handleClick = e => {
        e.preventDefault();
        dispatch(setQuery({ [keys]: !query[keys] }));
    };

    console.log(keys);

    return (
        <div>
            <button
                className={clsx(CSS.btn, query[keys] && CSS.checked)}
                onClick={handleClick}
            >
                <div className={CSS.btnBox}>
                    <svg className={CSS.icon}>
                        <use xlinkHref={`${icons}#${keys}`} />
                    </svg>
                    {keys}
                </div>
            </button>
        </div>
    );
};

export default CheckBox;
