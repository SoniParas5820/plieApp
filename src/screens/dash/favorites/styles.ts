import { StyleSheet } from 'react-native';
import { fp } from '../../../theme/metrics';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nonfavText: {
    fontSize: fp(16),
    color: colors.textMuted,
  },
});
