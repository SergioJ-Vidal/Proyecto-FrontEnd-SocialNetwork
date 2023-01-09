import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {

    comments: [],
    isLoading: false,
    comment: {}
};

export const getByPost = createAsyncThunk("posts/getById", async (id) => {

    try {

        return await commentsService.getComments(id);

    } catch (error) {

        console.error(error);

    }

});

export const commentsSlice = createSlice({

    name: "comments",

    initialState,

    reducers: {
        reset: (state) => {

            state.isLoading = false;

        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(getByPost.fulfilled, (state, action) => {

                state.comment = action.payload;

            })

    },

});

export default commentsSlice.reducer;