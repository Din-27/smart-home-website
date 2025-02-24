import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  dropdown_user: boolean;
  modal_form: boolean;
}

const initialState: ViewState = {
  dropdown_user: false,
  modal_form: false,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setDropdownUser: (state, action: PayloadAction<boolean>) => {
      state.dropdown_user = action.payload;
    },
    setModalForm: (state, action: PayloadAction<boolean>) => {
      state.modal_form = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDropdownUser, setModalForm } = viewSlice.actions;

export default viewSlice.reducer;
