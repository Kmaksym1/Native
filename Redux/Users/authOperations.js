
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const registerResp = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(registerResp.user, {
        displayName: values.name,
      });
      
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const loginResp = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      
      if (!loginResp.user) {
        console.log("No such User in System")
      }
      const { email, displayName } = loginResp.user;
      return {email, displayName};
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, thunkAPI) => {
    try {
      signOut(auth);
      console.log("SignOut succesfull");
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
