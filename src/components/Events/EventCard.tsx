import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import { Images } from '../../assets';
import { Event } from '../../types/event';

interface Props {
  item: Event;
  isFav: boolean;
  onFavPress: () => void;
}

const EventCard: React.FC<Props> = ({ item, isFav, onFavPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.event_profile_img }} style={styles.image} />

      <View style={styles.rightContent}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>
            {item.event_name}
          </Text>

          <TouchableOpacity
            onPress={() => {
              Alert.alert('Under Development');
            }}
          >
            <Image source={Images.Arrowright} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.dateRow}>
          <Text style={styles.date}>
            {item.readable_from_date}
            {item.readable_to_date ? ` – ${item.readable_to_date}` : ''}
          </Text>

          <Text style={styles.location}>
            {item.city}, {item.country}
          </Text>
        </View>

        <Text style={styles.price}>
          €{item.event_price_from} – €{item.event_price_to}
        </Text>

        <View style={styles.bottomRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tagsScroll}
          >
            {item.danceStyles?.map(ds => (
              <View key={ds.ds_id} style={styles.tag}>
                <Text style={styles.tagText}>{ds.ds_name}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Under Development');
              }}
            >
              <Image source={Images.Share} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFavPress}>
              <Image
                source={isFav ? Images.Fav : Images.Unfav}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
