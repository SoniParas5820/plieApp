import React, { useEffect, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getUser } from '../../storage/authStorage';

interface Props {
  subtitle?: string;
}

const TopHeader: React.FC<Props> = ({
  subtitle = 'Are you ready to dance?',
}) => {
  const [title, setTitle] = useState('Hello!');

  const loadUser = useCallback(async () => {
    const user = await getUser();
    if (user?.usr_fname) {
      setTitle(`Hello ${user.usr_fname} ${user.usr_lname}!`);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </SafeAreaView>
  );
};

export default TopHeader;
