import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useLazyGetEventsQuery } from '../../../services/coreApi';
import { getFavorites, saveFavorites } from '../../../storage/favoritesStorage';
import { getEvents, saveEvents } from '../../../storage/eventsStorage';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setFavorites, toggleFavorite } from '../../../slices/favoritesSlice';
import EventCard from '../../../components/Events/EventCard';
import TopHeader from '../../../components/TopHeader/TopHeader';
import styles from './styles';
import colors from '../../../theme/colors';
import { Event } from '../../../types/event';

export default function EventsScreen() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.list);

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [fetchEvents] = useLazyGetEventsQuery();

  useEffect(() => {
    getFavorites().then(list => dispatch(setFavorites(list)));
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);

    const cachedEvents = await getEvents();

    if (cachedEvents.length > 0) {
      setEvents(cachedEvents);
      setLoading(false);
    } else {
      await fetchAndStoreEvents();
    }
  };

  const fetchAndStoreEvents = async () => {
    try {
      const res = await fetchEvents().unwrap();
      setEvents(res);
      saveEvents(res);
    } catch (e) {
      console.log('Events API error', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAndStoreEvents();
  }, []);

  const isFavorite = useCallback(
    (event: Event) =>
      favorites.some(f => f.event_date_id === event.event_date_id),
    [favorites],
  );

  const renderItem = useCallback(
    ({ item }: { item: Event }) => (
      <EventCard
        item={item}
        isFav={isFavorite(item)}
        onFavPress={() => dispatch(toggleFavorite(item))}
      />
    ),
    [favorites],
  );

  const listData = useMemo(() => events, [events]);

  return (
    <>
      <TopHeader />

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={listData}
          keyExtractor={item => item.event_date_id.toString()}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.primary}
            />
          }
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
}
