import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../types/event';

interface State {
  list: Event[];
}

const initialState: State = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Event[]>) {
      state.list = action.payload;
    },
   toggleFavorite(state, action: PayloadAction<Event>) {
  const exists = state.list.find(
    e => e.event_date_id === action.payload.event_date_id
  );

  if (exists) {
    state.list = state.list.filter(
      e => e.event_date_id !== action.payload.event_date_id
    );
  } else {
    state.list.push(action.payload);
  }
}

  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
