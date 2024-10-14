import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCamper } from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import { setId } from '../../redux/campers/slice';
import { getCampers } from '../../redux/campers/operations';

const CamperDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(setId(id));
        dispatch(getCampers());
    }, []);
    return <div>CamperDetail</div>;
};

export default CamperDetail;
