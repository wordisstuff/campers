// import { Link } from "react-router-dom";
import CSS from './Car.module.css';

const Car = ({ ...rest }) => {
    const car = rest.car;
    console.log(car);
    console.log(car.address);
    let address;
    if (car.address) {
        address = car.address.split(' ');
        console.log(address);
    }
    return (
        // <Link>
        <li className={CSS.car}>
            <img src={`${car.img}`} alt={car.model} className={CSS.img} />
            <h2>
                {car.make} {car.model} {car.year} {car.rentalPrice}{' '}
            </h2>
            {address && (
                <p>
                    {address[3]} {address[4]} {car.rentalCompany} {car.type}
                </p>
            )}
            <button className={CSS.button}>Learn more</button>
        </li>
        // </Link>
    );
};

export default Car;
