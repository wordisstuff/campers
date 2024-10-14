import { MagnifyingGlass } from 'react-loader-spinner';

const NotFound = () => {
    return (
        <div>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
            />
            <h1>Unfortunately, we do not have campers with such parameters!</h1>
        </div>
    );
};

export default NotFound;
