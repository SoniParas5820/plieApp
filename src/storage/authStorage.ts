import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'AUTH_TOKEN';
const USER_KEY = 'AUTH_USER';

export const saveToken = (token: string) =>
  AsyncStorage.setItem(TOKEN_KEY, token);

export const getToken = () =>
  AsyncStorage.getItem(TOKEN_KEY);

export const removeToken = () =>
  AsyncStorage.removeItem(TOKEN_KEY);

export const saveUser = (user: any) =>
  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));

export const getUser = async () => {
  const data = await AsyncStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const removeUser = () =>
  AsyncStorage.removeItem(USER_KEY);
