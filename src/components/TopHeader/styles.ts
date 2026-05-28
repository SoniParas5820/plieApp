import { StyleSheet } from 'react-native';
import { wp, hp } from '../../theme/metrics';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.textWhite,
    paddingHorizontal: wp(20),
    paddingVertical: hp(1),
    marginBottom:hp(10)
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginTop: hp(4),
  },
});
