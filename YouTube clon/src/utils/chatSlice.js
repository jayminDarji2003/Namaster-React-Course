import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatMessage: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.chatMessage.unshift(action.payload);
        }
    }
})

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;