import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightTheme: true,
  sidebarOpen: false,
};
const doctorGeneralSlice = createSlice({
  name: "doctorGeneral",
  initialState,
  reducers: {
    changeDoctorTheme: (state, { payload }) => {
      if (payload) {
        document.querySelector("body").classList.remove("dark");
        localStorage.setItem("theme", "light");
        state.lightTheme = true;
      } else {
        document.querySelector("body").classList.add("dark");
        localStorage.setItem("theme", "dark");
        state.lightTheme = false;
      }
    },
    setDoctorDefaultTheme: (state, { payload }) => {
      state.theme = payload;
    },
    openDoctorSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeDoctorSidebar: (state) => {
      if (state.sidebarOpen) {
        state.sidebarOpen = false;
      }
    },
  },
});

export const {
  changeDoctorTheme,
  openDoctorSidebar,
  closeDoctorSidebar,
  setDoctorDefaultTheme,
} = doctorGeneralSlice.actions;

export const selectAllDoctorGeneralStates = (state) => state.doctorGeneral;

export default doctorGeneralSlice.reducer;
