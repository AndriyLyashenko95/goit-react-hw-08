import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

export const register = createAsyncThunk('auth/register', async (credentials) => {
  const response = await axios.post(`${API_URL}/users/signup`, credentials);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post(`${API_URL}/users/logout`);
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { getState }) => {
  const token = getState().auth.token;
  if (!token) {
    return { user: { name: null, email: null }, token: null };
  }
  const response = await axios.get(`${API_URL}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});