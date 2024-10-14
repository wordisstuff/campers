import { createAsyncThunk } from '@reduxjs/toolkit';
import { campApi, setQueryParams } from '../../api/api';

export const getCampers = createAsyncThunk(
    'campers/getAll',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { campers } = getState();
            const stringParams = setQueryParams([
                ...campers.query,
                ...campers.campType,
                ...campers.location,
            ]);
            const { data } = await campApi.get(`?${stringParams}`);
            return data;
        } catch (error) {
            return rejectWithValue({
                err: error.message,
                status: error.status,
            });
        }
    },
);
