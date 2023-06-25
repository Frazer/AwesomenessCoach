import { createSlice, nanoid } from "@reduxjs/toolkit";

export const chatMessagesSlice = createSlice({
  name: "chatMessages",
  initialState: [
    {
      id: "1",
      time: 1611092188,
      senderId: "zen_master",
      type: "text",
      content: "Hi.  Great to have you here.",
    },
    {
      id: "2",
      time: 1611092487,
      senderId: "jenny",
      type: "text",
      content: "Hey hello to you to :)",
    },
    {
      id: "4",
      time: 1611096652,
      senderId: "jenny",
      type: "text",
      content: "and I'm excited to be here",
    },
    {
      id: "5",
      time: 1611096659,
      senderId: "jenny",
      type: "text",
      content: "but I'm having these issues",
    },
    {
      id: "7",
      time: 1611165731,
      senderId: "zen_master",
      type: "text",
      content:
        "I'm sorry to hear that you're going through a difficult time. Remember that you're not alone, and reaching out for support is an important step.",
    },
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
          },
        };
      },
    },
  },
});

export const { sendChatMessage } = chatMessagesSlice.actions;

export default chatMessagesSlice.reducer;
