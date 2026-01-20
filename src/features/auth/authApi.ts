import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginRequest, LoginResponse, User } from '@/types/api.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Login user
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

    // Get current user profile
    getCurrentUser: builder.query<User, string>({
      query: (token) => ({
        url: '/auth/me',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;
