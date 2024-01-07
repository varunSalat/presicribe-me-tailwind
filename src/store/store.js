import { configureStore } from "@reduxjs/toolkit";

// REDUCERS
import { loginReducer } from "./features/loginModuleSlices";
// APIS
import LoginModuleAPIs from "./apis/loginModuleAPIs";
import {
  doctorGeneralReducer,
  onboardReducer,
} from "./features/doctorModuleSlices";

const store = configureStore({
  reducer: {
    // !APIs
    [LoginModuleAPIs.reducerPath]: LoginModuleAPIs.reducer,
    // !REDUCERS
    login: loginReducer,
    doctorGeneral: doctorGeneralReducer,
    onboard: onboardReducer,
  },
  // Add the middleware for RTK-Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginModuleAPIs.middleware),
});
export default store;
