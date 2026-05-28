import { StyleSheet, Platform } from 'react-native';
import colors from './colors';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textWhite,
  },

  shadow: {
    backgroundColor: colors.textWhite,
    ...Platform.select({
      ios: {
        shadowColor: colors.textPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  robotoLight: {
    fontFamily: 'Roboto-Light',
    includeFontPadding: false,
    textAlignVertical: 'center',
    ...Platform.select({
      ios: { fontWeight: '300' },
    }),
  },

  robotoRegular: {
    fontFamily: 'Roboto-Regular',
    includeFontPadding: false,
    textAlignVertical: 'center',
    ...Platform.select({
      ios: { fontWeight: '400' },
    }),
  },

  robotoMedium: {
    fontFamily: 'Roboto-Medium',
    includeFontPadding: false,
    textAlignVertical: 'center',
    ...Platform.select({
      ios: { fontWeight: '500' },
    }),
  },

  robotoBold: {
    fontFamily: 'Roboto-Bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
    ...Platform.select({
      ios: { fontWeight: '700' },
      android: { fontWeight: '700' },
    }),
  },
});

export default AppStyles;
