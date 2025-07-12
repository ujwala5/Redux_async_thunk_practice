import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPosts = createAsyncThunk('/post/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log("response==>>", response);
    return response.data;
})

export const counterSlice = createSlice({
    name: "post",
    initialState: {
        value: [],
        loading: false,
        error: null
    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
});

export default counterSlice.reducer;