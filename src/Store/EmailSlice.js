import { createSlice } from "@reduxjs/toolkit";

const initialState = { receivedemaildata: [], unread: 0 };
const EmailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    receivedemail(state, action) {
      // // Using the spread operator to concatenate the new data
      // state.receivedemaildata = [...state.receivedemaildata, ...action.payload];
      state.receivedemaildata = action.payload;
      //state.receivedemaildata.push(...action.payload)
      // Using the spread operator to concatenate the new data

      // action.payload.forEach((newItem) => {
      //   // Check if the id already exists in the state
      //   const existingItem = state.receivedemaildata.find(
      //     (item) => item.id === newItem.id
      //   );

      //   if (!existingItem) {
      //     // If the id doesn't exist, push the new item
      //     state.receivedemaildata.push(newItem);
      //   } else {
      //     // If the id already exists, update the existing item (if needed)
      //     // Example: state.receivedemaildata[state.receivedemaildata.indexOf(existingItem)] = newItem;
      //   }
      // });

      // Increment the unread count for each item with messageread: true
    },
  },
});

export const emailAction = EmailSlice.actions;
export default EmailSlice;