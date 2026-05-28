import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleFavorite } from '../../../slices/favoritesSlice';
import EventCard from '../../../components/Events/EventCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
import styles from './styles';
import Strings from '../../../utils/strings';

export default function FavoritesScreen() {
  const favorites = useAppSelector(state => state.favorites.list);
  const dispatch = useAppDispatch();

  return (
    <>
      <TopHeader />

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.nonfavText}>
            {Strings.login.Nofavoritesyet}
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.event_date_id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <EventCard
              item={item}
              isFav={true}
              onFavPress={() => dispatch(toggleFavorite(item))}
            />
          )}
        />
      )}
    </>
  );
}
