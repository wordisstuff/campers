import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const INIT_STATE = {
    items: null,
    pagesArr: null,
    pageIdx:1,
    selectedCamper: '',
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
        setId: (state, action) => {
            console.log(action.payload);
            state.selectedCamper = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setSelectedCamper: (state, action) => {
            state.selectedCamper = action.payload;
        },
        setQuery: (state, action) => {
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
            state.favorite = { ...state.favorite, ...action.payload };
        },
        setPages: (state, action) => {
            state.pagesArr = action.payload;
        },
        setPageIdx:(state, action) =>{
            state.pageIdx = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCampers.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCampers.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.loading = false;
            })
            .addCase(getCampers.rejected, (state, action) => {
                state.error = action.payload.status;
                state.loading = false;
            });
    },
});
export const campersReducer = campersSlice.reducer;

export const {
    setSelectedCamper,
    setQuery,
    setFavorite,
    setLocation,
    setId,
    setPages,
    setPageIdx
} = campersSlice.actions;
