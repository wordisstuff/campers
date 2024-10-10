import { createAsyncThunk } from "@reduxjs/toolkit";
import { campApi } from "../../api/api";

export const getCampers = createAsyncThunk(
    "campers/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await campApi.get("/");
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
