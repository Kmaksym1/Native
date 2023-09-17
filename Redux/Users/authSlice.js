import { login, register, registerDB, signOutUser } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { email: "", password: "" },
  error: null,
  isLogedIn: false,
};
const handleLogedIn = (state, action) => {
  state.user = action.payload;
  state.error = null;
  state.isLogedIn = true;
};
const handleSignOut = (state) => {
  state.user = {};
  state.isLogedIn = false;
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(login.fulfilled, handleLogedIn)
      // .addCase(loginDB.rejected, handleLogedIn)
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message; // Handle the error
      })
      .addCase(signOutUser.fulfilled, handleSignOut)
    // .addCase(loginUser.fulfilled, handleLogedIn)
    // .addCase(logOut.fulfilled, state => {
    //   state.user = { name: null, email: null };
    // })
    // .addCase(fetchCurrentUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // })
    // .addCase(fetchCurrentUser.rejected, (state, action) => {
    //   state.error = action.payload;
    // })
    // .addCase(fetchCurrentUser.pending, state => {

    // });
  },
});
export const authReducer = authSlice.reducer;
