import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventsScreen from '../screens/dash/events/EventsScreen';
import FavoritesScreen from '../screens/dash/favorites/FavoritesScreen';
import ProfileScreen from '../screens/dash/profile/ProfileScreen';

import { Images } from '../assets';
import colors from '../theme/colors';
import { hp, wp } from '../theme/metrics';
import SearchScreen from '../screens/dash/search/SearchScreen';

export type TabParamList = {
  Events: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabIcon = ({
  focused,
  routeName,
}: {
  focused: boolean;
  routeName: keyof TabParamList;
}) => {
  let source;

  switch (routeName) {
     case 'Search':
      source = Images.Search;
      break;

    case 'Events':
      source = Images.Calendar_Days;
      break;

    case 'Favorites':
      source = Images.Unfav;
      break;

    case 'Profile':
      source = Images.User;
      break;
  }

  return (
    <Image
      source={source}
      style={{
        width: focused ? wp(30) : wp(24),
        height: focused ? wp(30) : wp(24),
        resizeMode: 'contain',
      }}
    />
  );
};


export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            routeName={route.name as keyof TabParamList}
          />
        ),

        tabBarActiveTintColor: colors.textMuted,
        tabBarInactiveTintColor: colors.textMuted,

        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarStyle: {
          height: hp(80),
          paddingTop: 6,
        },
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
