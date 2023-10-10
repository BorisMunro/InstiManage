import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMenu: false
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      return { openMenu: !action.payload};
    }
  },
});

const { reducer, actions } = menuSlice;

export const { toggleMenu } = actions
