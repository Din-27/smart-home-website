import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DrawerState {
  minimize: boolean;
}

const initialState: DrawerState = {
  minimize: true,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    dynamicEdit: (state, action: PayloadAction<boolean>) => {
      state.minimize = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dynamicEdit } = drawerSlice.actions;

export default drawerSlice.reducer;
