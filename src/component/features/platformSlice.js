import { createSlice } from "@reduxjs/toolkit";

const platformSlice = createSlice({
  name: "platform",
  initialState: { userAgent: "" },
  reducers: {
    getPlatform: (state) => {
      const ua = navigator.userAgent;

      state.userAgent = ua.includes("Windows")
        ? "Windows"
        : ua.includes("Android")
          ? "Android"
          : "Other";
    },
  },
});

export const { getPlatform } = platformSlice.actions;
export default platformSlice.reducer;
