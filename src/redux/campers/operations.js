import { createAsyncThunk } from '@reduxjs/toolkit';
import { campApi, setQueryParams, sixItems } from '../../api/api';
import { setPages } from './slice';

export const getCampers = createAsyncThunk(
    'campers/getAll',
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const { campers } = getState();
            console.log(campers);
            const stringParams = setQueryParams([
                ...campers.query,
                ...campers.campType,
                ...campers.location,
            ]);

            const urla =
                campers.selectedCamper !== ''
                    ? `/${campers.selectedCamper}?${stringParams}`
                    : `?${stringParams}`;
            const { data } = await campApi.get(urla);
            if (!data.items) {
                return { items: data };
            }
            console.log(data);
            dispatch(setPages(sixItems(data.items)));
            return data;
        } catch (error) {
            return rejectWithValue({
                err: error.message,
                status: error.status,
            });
        }
    },
);
