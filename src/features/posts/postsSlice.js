import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {

    posts: [],
    isLoading: false,
    post: {}
};

export const getAll = createAsyncThunk("posts/getAll", async () => {

    try {

        return await postsService.getAll();

    } catch (error) {

        console.error(error);

    }

});

export const getById = createAsyncThunk("posts/getById", async (id) => {

    try {

        return await postsService.getById(id);

    } catch (error) {

        console.error(error);

    }

});

export const getPostByName = createAsyncThunk("posts/getPostByName", async (postName) => {
    try {
        return await postsService.getPostByName(postName);
    } catch (error) {
        console.error(error);
    }
});

export const getComments = createAsyncThunk("comments/find", async (comments) => {
    try {
        return await postsService.getComments(comments);
    } catch (error) {
        console.error(error);
    }
})

export const createPost = createAsyncThunk(

    "posts/create",

    async (post) => {

        try {

            return await postsService.create(post);

        } catch (error) {

            console.error(error);

        }

    }

);

export const deletePost = createAsyncThunk(

    "posts/delete",

    async (id) => {

        try {

            return await postsService.deletePost(id);

        } catch (error) {

            console.error(error);

        }

    }

);

export const update = createAsyncThunk(

    "posts/update",

    async (id, data) => {

        try {

            return await postsService.updatePost(id, data);

        } catch (error) {

            console.error(error);

        }

    }

);


export const updateThread = createAsyncThunk(

    "posts/update",

    async (test) => {
        console.log(test)
        try {

            return await postsService.updatePost(test);

        } catch (error) {

            console.error(error);

        }

    }

);

export const likePosts = createAsyncThunk(

    "posts/like",

    async (id) => {
        
        try {

            return await postsService.likePost(id);

        } catch (error) {

            console.error(error);

        }

    }

);

export const postsSlice = createSlice({

    name: "posts",

    initialState,

    reducers: {
        reset: (state) => {

            state.isLoading = false;

        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(getAll.fulfilled, (state, action) => {

                state.posts = action.payload;

            })

            .addCase(getAll.pending, (state) => {

                state.isLoading = true;

            })

            .addCase(getById.fulfilled, (state, action) => {

                state.post = action.payload;

            })

            .addCase(getPostByName.fulfilled, (state, action) => {
                state.posts = action.payload;
            })

            .addCase(updateThread.fulfilled, (state, action) => {
                const posts = state.posts.map((post) => {
                    if (post._id === action.payload.post._id) {
                      post = action.payload.post;
                    }
                    return post;
                  });
                  state.posts = posts;
          
            })

            .addCase(deletePost.fulfilled, (state, action) => {
                state.post = action.payload;
            })

            // .addCase(likePosts.fulfilled, (state, action) => {
            //     state.post = action.payload;
            // })



    },

});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;