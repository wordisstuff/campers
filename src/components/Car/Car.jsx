// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../../media/icons';
import CSS from './Car.module.css';
import { setFavorite } from '../../redux/campers/slice';
import { selectFavorite } from '../../redux/campers/selectors';
import { clsx } from 'clsx';

const Car = ({ ...rest }) => {
    const camp = rest.camp;
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavorite);

    const handleClick = e => {
        e.preventDefault();
        dispatch(setFavorite({ [camp.id]: !favorite[camp.id] }));
    };

    return (
        // <Link>
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
                    {/* {address && (
                    <p>
                        {address[3]} {address[4]} {car.rentalCompany} {car.type}
                    </p>
                )} */}
                    <button className={CSS.button}>Show more</button>
                </div>
            </div>
        </li>
        // </Link>
    );
};

export default Car;
