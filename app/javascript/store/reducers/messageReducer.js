import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        content: '',
    },
    reducers: {
        setMessage: (state, action) => {
          state.content = action.payload;
        },
    },
})

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;