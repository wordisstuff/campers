// import { Link } from "react-router-dom";
import CSS from './Car.module.css';

const Car = ({ ...rest }) => {
    const camp = rest.camp;
    console.log(camp);
    // console.log(car.address);
    // let address;
    // if (car.address) {
    //     address = car.address.split(' ');
    //     console.log(address);
    // }
    return (
        // <Link>
        <li className={CSS.car}>
            <div>
                <img
                    src={`${camp.gallery[0].original}`}
                    alt={camp.name}
                    className={CSS.img}
                />
            </div>
            <div className={CSS.discr}>
                <h2>
                    {camp.name} {camp.year} {camp.price}{' '}
                </h2>
                {/* {address && (
                    <p>
                        {address[3]} {address[4]} {car.rentalCompany} {car.type}
                    </p>
                )} */}
            </div>
            <button className={CSS.button}>Show more</button>
        </li>
        // </Link>
    );
};

export default Car;
