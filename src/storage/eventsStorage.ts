import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '../types/event';

const EVENTS_KEY = 'CACHED_EVENTS';

export const saveEvents = async (events: Event[]) => {
  try {
    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch (e) {
    console.log('Save events error', e);
  }
};

export const getEvents = async (): Promise<Event[]> => {
  try {
    const data = await AsyncStorage.getItem(EVENTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};
