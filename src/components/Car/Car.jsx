// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../../media/icons';
import CSS from './Car.module.css';
import { setFavorite } from '../../redux/campers/slice';
import {
    selectFavorite,
    selectPagesArr,
    // selectSelectedCamper,
} from '../../redux/campers/selectors';
import { clsx } from 'clsx';
import Equipment from '../Equipment/Equipment';
import { setEquipmentsArr } from '../../api/api';

const Car = ({ ...rest }) => {
    const camp = rest.camp;
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavorite);
    // const selectCampId = useSelector(selectSelectedCamper);
    const selectPages = useSelector(selectPagesArr);
    console.log(selectPages);
    const handleClick = e => {
        e.preventDefault();
        dispatch(setFavorite({ [camp.id]: !favorite[camp.id] }));
    };

    const equipmentKey = setEquipmentsArr(camp);

    return (
        <li className={CSS.car}>
            <div className={CSS.carBox}>
                <div>
                    <img
                        src={`${camp.gallery[0].original}`}
                        alt={camp.name}
                        className={CSS.img}
                    />
                </div>
                <div className={CSS.discr}>
                    <div>
                        <div className={CSS.topLine}>
                            <h2>{camp.name}</h2>
                            <div className={CSS.priceBox}>
                                <h2>€{camp.price.toFixed(2)}</h2>
                                <button
                                    className={CSS.heartBtn}
                                    onClick={handleClick}
                                >
                                    <svg
                                        className={clsx(
                                            CSS.icon,
                                            favorite[camp.id] === true &&
                                                CSS.favorite,
                                        )}
                                    >
                                        <use xlinkHref={`${icons}#heart`} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={CSS.ratingLine}>
                            <svg className={CSS.ratingIcon}>
                                <use xlinkHref={`${icons}#rating`} />
                            </svg>
                            <p className={CSS.ratingText}>
                                {camp.rating}({camp.reviews.length}Reviews)
                            </p>
                            <svg className={CSS.mapIcon}>
                                <use xlinkHref={`${icons}#map`} />
                            </svg>
                            <p>{camp.location}</p>
                        </div>
                    </div>
                    <p className={CSS.description}>{camp.description}</p>
                    <ul className={CSS.equipmentUl}>
                        {equipmentKey &&
                            equipmentKey.map((name, idx) => (
                                <Equipment key={idx} name={name} />
                            ))}
                    </ul>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`catalog/${camp.id}`}
                        className={CSS.button}
                    >
                        Show more
                    </a>
                </div>
            </div>
        </li>
    );
};

export default Car;
