import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import TopHeader from '../../../components/TopHeader/TopHeader';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <TopHeader />

      {/* SEARCH BAR */}
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search events, artists, locations..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* CENTER CONTENT */}
      <View style={styles.centerContent}>
        <Text style={styles.devText}>🚧 Under Development</Text>
      </View>
    </View>
  );
}
