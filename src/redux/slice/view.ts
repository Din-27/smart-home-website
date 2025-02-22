import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  dropdown_user: boolean;
}

const initialState: ViewState = {
  dropdown_user: false,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setDropdownUser: (state, action: PayloadAction<boolean>) => {
      state.dropdown_user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDropdownUser } = viewSlice.actions;

export default viewSlice.reducer;
