import { StyleSheet } from 'react-native';
import { hp, wp, fp } from '../../../theme/metrics';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteoff,
  },

  card: {
    alignItems: 'center',
    marginTop: hp(40),
  },

  avatar: {
    width: wp(90),
    height: wp(90),
    borderRadius: wp(45),
    marginBottom: hp(12),
  },

  name: {
    fontSize: fp(18),
    fontWeight: '600',
    color: colors.textPrimary,
  },

  email: {
    fontSize: fp(14),
    color: colors.textMuted,
    marginTop: hp(4),
  },

  logoutBtn: {
    position: 'absolute',
    bottom: hp(30),
    left: wp(20),
    right: wp(20),
    height: hp(52),
    backgroundColor: colors.error,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    fontSize: fp(16),
    color: colors.textWhite,
    fontWeight: '600',
  },
});
