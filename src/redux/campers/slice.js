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
    location: [{ location: '' }],
    favorite: {},
    loading: false,
    error: null,
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: INIT_STATE,
    reducers: {
        setLocation: (state, action) => {
            console.log(action.payload);
            state.location = action.payload;
        },
        setSelectedCamper: (state, action) => {
            state.selectedCamper = action.payload;
        },
        setQuery: (state, action) => {
            console.log(action.payload);
            const key = Object.keys(action.payload)[0];

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
            if (key === 'location') {
                state.location = action.payload[key];
            }
        },
        setFavorite: (state, action) => {
            console.log(action.payload);
            state.favorite = { ...state.favorite, ...action.payload };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getCampers.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCampers.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = action.payload.items;
                state.loading = false;
            })
            .addCase(getCampers.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload.status);
                state.error = action.payload.status;
            });
    },
});
export const campersReducer = campersSlice.reducer;

export const { setSelectedCamper, setQuery, setFavorite, setLocation } =
    campersSlice.actions;
