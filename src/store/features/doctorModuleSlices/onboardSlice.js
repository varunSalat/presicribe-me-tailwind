import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOnboardSection: false,
  activeForm: 0,
  addStaffForm: 0,
  formData: {
    numberOfDoctors: "",
    staffMem: [],
    doctorList: [],
    frontDeskList: [],
  },
};
const onboardSlice = createSlice({
  name: "onboard",
  initialState,
  reducers: {
    openOnboardSection: (state) => {
      state.isOnboardSection = true;
    },
    closeOnboardSection: (state) => {
      state.isOnboardSection = false;
    },
    selectNumOfDocs: (state, { payload }) => {
      state.formData.numberOfDoctors = payload;
      state.activeForm = 1;
    },
    // !SECOND FORM
    selectStaffMem: (state, { payload }) => {
      if (state.formData.staffMem.some((mem) => mem === payload)) {
        const updatedArr = state.formData.staffMem.filter(
          (mem) => mem !== payload,
        );
        state.formData.staffMem = updatedArr;
      } else {
        if (payload !== "singleDoctor") {
          const updatedArr = state.formData.staffMem.filter(
            (item) => item !== "singleDoctor",
          );
          updatedArr.push(payload);
          state.formData.staffMem = updatedArr;
        } else {
          state.formData.staffMem = ["singleDoctor"];
        }
      }
    },
    submitStaffMem: (state) => {
      state.activeForm = 2;
    },
    changeStaffForm: (state, { payload }) => {
      state.addStaffForm = payload;
    },
    // !THIRD FORM
    addMoreDoctors: (state, { payload }) => {
      state.formData.doctorList.push(payload);
    },
    addMoreFrontDesk: (state, { payload }) => {
      state.formData.frontDeskList.push(payload);
    },
    // !FORTH FORM
    navigateOnboardForm: (state, { payload }) => {
      state.addStaffForm = 0;
      if (payload < state.activeForm) {
        state.activeForm = payload;
      }
    },
  },
});

export const {
  openOnboardSection,
  closeOnboardSection,
  selectNumOfDocs,
  navigateOnboardForm,
  selectStaffMem,
  submitStaffMem,
  changeStaffForm,
  addMoreDoctors,
  addMoreFrontDesk,
} = onboardSlice.actions;

export const selectAllOnboard = (state) => state.onboard;

export default onboardSlice.reducer;
