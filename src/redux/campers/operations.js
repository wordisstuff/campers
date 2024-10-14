import { createAsyncThunk } from '@reduxjs/toolkit';
import { campApi, setQueryParams } from '../../api/api';

export const getCampers = createAsyncThunk(
    'campers/getAll',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { campers } = getState();
            const stringParams = setQueryParams([
                ...(campers.id ? [{ id: campers.id }] : []),
                ...campers.query,
                ...campers.campType,
                ...campers.location,
            ]);
            const { data } = await campApi.get(`?${stringParams}`);
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue({
                err: error.message,
                status: error.status,
            });
        }
    },
);
