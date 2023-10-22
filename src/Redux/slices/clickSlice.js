import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
  name: "clicks",
  initialState: {
    showOverlay: false,
    showMobileNav: false,
    storeMobileNav: null,
  },
  reducers: {
    ShowMobileNavFN: (state) => {
      state.showOverlay = true;
      state.showMobileNav = true;
    },

    setStoreMobileNav: (state, action) => {
      state.showOverlay = true;
      state.storeMobileNav = action.payload;
    },

    ShowHideAllFN: (state) => {
      state.showOverlay = false;
      state.showMobileNav = false;
      state.storeMobileNav = null;
    },
  },
});

export const {
  ShowMobileNavFN,
  HideMobileNavFN,
  setStoreMobileNav,
  ShowHideAllFN,
} = clickSlice.actions;

//selectors
export const selectClicks = (state) => state.clicks;

export default clickSlice.reducer;
