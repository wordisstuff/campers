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
            ]);
            console.log(stringParams);
            const { data } = await campApi.get(`?${stringParams}`);
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
