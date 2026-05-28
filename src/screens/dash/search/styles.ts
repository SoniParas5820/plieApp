import { StyleSheet } from 'react-native';
import { hp, wp, fp } from '../../../theme/metrics';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteoff,
  },

  /* SEARCH BAR */
  searchWrapper: {
    paddingHorizontal: wp(16),
    marginTop: hp(10),
  },

  searchInput: {
    height: hp(48),
    backgroundColor: colors.textWhite,
    borderRadius: 14,
    paddingHorizontal: wp(16),
    fontSize: fp(14),
    color: colors.textPrimary,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  /* CENTER MESSAGE */
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  devText: {
    fontSize: fp(16),
    color: colors.textMuted,
    fontWeight: '500',
  },
});
