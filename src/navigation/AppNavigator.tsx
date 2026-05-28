import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/LoginScreen';
import TabNavigator from './TabNavigator';
import { getToken } from '../storage/authStorage';
import { setLoggedIn } from '../slices/authSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export default function AppNavigator() {
   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getToken().then(token => {
      if (token) dispatch(setLoggedIn());
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
}
