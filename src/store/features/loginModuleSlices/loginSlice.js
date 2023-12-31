import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginFormData: {
    email: "",
    pass: "",
    designation: "Doctor",
  },
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLoginInputChange: (state, { payload }) => {
      const formData = { ...state.loginFormData };
      const updatedFormData = { ...formData, [payload.name]: payload.value };
      state.loginFormData = updatedFormData;
    },
  },
});

export const { handleLoginInputChange } = loginSlice.actions;

export const selectAllLoginStates = (state) => state.login;

export default loginSlice.reducer;
