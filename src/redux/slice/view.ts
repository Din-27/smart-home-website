import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TNameSessionBox = "add_schedule" | "add_device" | "";
type TDrawerProps = {
  name: TNameSessionBox;
  view: boolean;
  minimize?: boolean;
};
export interface ViewState {
  dropdown_user: boolean;
  dropdown_box_devices: boolean;
  drawer_view: TDrawerProps;
}

const initialState: ViewState = {
  dropdown_user: false,
  dropdown_box_devices: false,
  drawer_view: { name: "", view: false, minimize: false },
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setDropdownUser: (state, action: PayloadAction<boolean>) => {
      state.dropdown_user = action.payload;
    },
    setDrawerView: (state, action: PayloadAction<TDrawerProps>) => {
      state.drawer_view = action.payload;
    },
    setDropdownBox: (state, action: PayloadAction<boolean>) => {
      state.dropdown_box_devices = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDropdownUser, setDrawerView, setDropdownBox } =
  viewSlice.actions;

export default viewSlice.reducer;
