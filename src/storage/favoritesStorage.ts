import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '../types/event';

const KEY = 'FAVORITE_EVENTS';

export const getFavorites = async (): Promise<Event[]> => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = async (list: Event[]) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
};
