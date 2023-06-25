import { createSlice, nanoid } from "@reduxjs/toolkit";

export const chatMessagesSlice = createSlice({
  name: "chatMessages",
  initialState: [
    { id: "1", time: 1611092188, senderId: "john_doe", type: "text", content: "Hello World!" },
    { id: "1.5", time: 1611092188, senderId: "john_doe", type: "text", content: "Hello World!" },
    { id: "1.75", time: 1611092258, senderId: "john_doe", type: "text", content: "Hello World!" },
    { id: "2", time: 1611092487, senderId: "jenny", type: "text", content: "Hey hello to you to :)" },
    { id: "3", time: 1611096651, senderId: "jenny", type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: "4", time: 1611096652, senderId: "jenny", type: "text", content: "and sed do eiusmod tempor incididunt" },
    { id: "5", time: 1611096659, senderId: "jenny", type: "text", content: "but tempor incididunt" },
    { id: "6", time: 1611165730, senderId: "john_doe", type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: "7", time: 1611165731, senderId: "john_doe", type: "text", content: "Lorem ipsum dolor sit amet,  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  deserunt mollit anim id est laborum." },
  ],
  reducers: {
    sendChatMessage: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(senderId, receiverId, type, content) {
        return {
          payload: {
            id: nanoid(), // This should be put on server side
            time: Date.now() / 1000, // This should be put on server side
            senderId,
            receiverId,
            type,
            content,
          }
        };
      }
    },
  }
});

export const { sendChatMessage } = chatMessagesSlice.actions;

export default chatMessagesSlice.reducer;