import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const INIT_STATE = {
    items: null,
    selectedCamper: null,
    query: [
        { AC: false },
        { transmission: '' },
        { kitchen: false },
        { TV: false },
        { bathroom: false },
    ],
    campType: [
        { panelTruck: false },
        { fullyIntegrated: false },
        { alcove: false },
    ],
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: INIT_STATE,
    reducers: {
        setSelectedCamper: (state, action) => {
            state.selectedCamper = action.payload;
        },
        setQuery: (state, action) => {
            const key = Object.keys(action.payload)[0];
            console.log(action.payload);

            state.query = state.query.map(item => {
                if (key in item) {
                    return { [key]: action.payload[key] };
                }
                return item;
            });

            if (
                key === 'panelTruck' ||
                key === 'fullyIntegrated' ||
                key === 'alcove'
            ) {
                state.campType = state.campType.map(item => {
                    console.log(item);
                    if (key in item) {
                        return { [key]: action.payload[key] };
                    }
                    return { ...item, [Object.keys(item)[0]]: false };
                });
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(getCampers.fulfilled, (state, action) => {
            console.log(action.payload);
            state.items = action.payload.items;
        });
    },
});
export const campersReducer = campersSlice.reducer;

export const { setSelectedCamper, setQuery } = campersSlice.actions;
