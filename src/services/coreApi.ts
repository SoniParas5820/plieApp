import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import { API_CONFIG } from './apiConfig';
import { setLoggedIn } from '../slices/authSlice';
import { Event } from '../types/event';
import { saveToken, saveUser } from '../storage/authStorage';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: any;
    token: string;
  };
}

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
  }),

  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => {
        return {
          url: '/login',
          method: 'POST',
          data: { email, password },
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };
      },

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
  try {
    const { data } = await queryFulfilled;

    if (!data.success) {
      // ❌ Do NOT login
      throw new Error(data.message || 'Login failed');
    }

    // ✅ Only for valid login
    dispatch(setLoggedIn());
    await saveToken(data.data.token);
    await saveUser(data.data.user);

  } catch (err) {
    console.log('🔴 LOGIN FAILED', err);
  }
}

    }),

    getEvents: builder.query<Event[], void>({
      query: () => ({
        url: '/events-listing',
        method: 'POST',
        headers: { Accept: 'application/json' },
      }),
      transformResponse: (res: any) => res.data.events,
    }),
  }),
});

export const { useLoginMutation, useLazyGetEventsQuery } = coreApi;
