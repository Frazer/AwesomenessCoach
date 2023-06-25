import { configureStore } from "@reduxjs/toolkit";
import chatMessagesReducer from "./reducers/chatMessagesSlice";

export default configureStore({
  reducer: {
    chatMessages: chatMessagesReducer
  }
});