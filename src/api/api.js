import axios from 'axios';

const urla = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;
console.log(urla);
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
    console.log(prop);
    console.log(key);
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
    console.log(arr);
    const queryUrlaArr = arr.map(q => {
        console.log(q);
        const keys = Object.keys(q);
        if (!q[keys[0]]) {
            return '';
        }
        const params = new URLSearchParams();
        params.append(
            checkPropKeyOnCampType(keys[0]),
            checkPropOnCampType(keys, q[keys[0]]),
        );
        console.log(params.toString());
        return params.toString();
    });
    console.log(queryUrlaArr);
    const filteredParams = queryUrlaArr.filter(q => q !== '');
    const queryUrla = filteredParams.join('&');
    return queryUrla;
};
