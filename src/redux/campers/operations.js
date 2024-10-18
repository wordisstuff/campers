import { createAsyncThunk } from '@reduxjs/toolkit';
import { campApi, setQueryParams, sixItems } from '../../api/api';

export const getCampers = createAsyncThunk(
    'campers/getAll',
    async (_, { rejectWithValue, getState }) => {
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

            if(data.items.length > 0){
                
            }
            sixItems(data.items)
            sixItems(data.items)
            sixItems(data.items)
            return data;
        } catch (error) {
            return rejectWithValue({
                err: error.message,
                status: error.status,
            });
        }
    },
);
