import axios from 'axios';

const urla = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;
export const campApi = axios.create({
    baseURL: urla,
});

export const chechBoxText = key => {
    key === 'transmission' ? (key = 'automatic') : key;
    key === 'panelTruck' ? (key = 'van') : key;
    key === 'fullyIntegrated' ? (key = 'fully integrated') : key;
    return key;
};
export const stringToBool = (key, value) => {
    if (key === 'transmission') {
        if (value === '') {
            return 'automatic';
        }
        return '';
    }
    return !value;
};

const checkPropOnCampType = (key, prop) => {
    switch (key[0]) {
        case 'fullyIntegrated':
            return 'fullyIntegrated';
        case 'panelTruck':
            return 'panelTruck';
        case 'alcove':
            return 'alcove';
        default:
            return prop.toString();
    }
};
const checkPropKeyOnCampType = key => {
    if (key === 'fullyIntegrated' || key === 'panelTruck' || key === 'alcove') {
        return 'form';
    }
    return key.toString();
};

export const setQueryParams = arr => {
    const queryUrlaArr = arr.map(q => {
        const keys = Object.keys(q);
        if (!q[keys[0]]) {
            return '';
        }
        const params = new URLSearchParams();
        params.append(
            checkPropKeyOnCampType(keys[0]),
            checkPropOnCampType(keys, q[keys[0]]),
        );
        return params.toString();
    });
    const filteredParams = queryUrlaArr.filter(q => q !== '');
    const queryUrla = filteredParams.join('&');
    return queryUrla;
};

export const setEquipmentsArr = obj => {
    return Object.keys(obj).reduce((acc, key) => {
        if (obj[key].toString() === 'true') {
            acc.push(key);
        }
        return acc;
    }, []);
};

export const sixItems =(arr)=>{
    const items = 6;
    let newArr=[];
    for(let i = 1;i <=items;i++ ){
        const item = arr.shift()
        newArr.push(item)
    }
    console.log(newArr)
    return newArr;
};