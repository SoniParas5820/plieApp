import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { getUser, removeToken, removeUser } from '../../../storage/authStorage';
import { useAppDispatch } from '../../../app/hooks';
import { logout } from '../../../slices/authSlice';
import TopHeader from '../../../components/TopHeader/TopHeader';
import styles from './styles';
import Strings from '../../../utils/strings';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<any>(null);

  /* ---------------- LOAD USER ---------------- */
  useEffect(() => {
    getUser().then(setUser);
  }, []);

  /* ---------------- LOGOUT CONFIRM ---------------- */
  const onLogout = () => {
    Alert.alert(
      Strings.login.Logout,
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            await removeToken();
            await removeUser();
            dispatch(logout());
          },
        },
      ],
      { cancelable: true },
    );
  };

  if (!user) return null;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <TopHeader />

      {/* USER CARD */}
      <View style={styles.card}>
        {user.usr_profile_img && (
          <Image
            source={{ uri: user.usr_profile_img }}
            style={styles.avatar}
          />
        )}

        <Text style={styles.name}>
          {user.usr_fname} {user.usr_lname}
        </Text>

        <Text style={styles.email}>{user.usr_email}</Text>
      </View>

      {/* LOGOUT BUTTON AT BOTTOM */}
      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutText}>{Strings.login.Logout}</Text>
      </TouchableOpacity>
    </View>
  );
}
