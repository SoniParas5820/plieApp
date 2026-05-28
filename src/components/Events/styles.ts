import { StyleSheet } from 'react-native';
import { wp, hp, fp } from '../../theme/metrics';
import colors from '../../theme/colors';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.textWhite,
    borderRadius: 20,
    marginHorizontal: wp(16),
    marginBottom: hp(14),
    padding: wp(14),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: wp(90),
    height: wp(90),
    borderRadius: 16,
    marginRight: wp(14),
  },

  rightContent: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    flex: 1,
    fontSize: fp(14),
    fontWeight: '600',
    color: colors.textPrimary,
    marginRight: wp(8),
  },

  arrowIcon: {
    width: wp(18),
    height: wp(18),
    tintColor: colors.textMuted,
    marginTop: hp(2),
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },

  date: {
    fontSize: fp(12),
    color: colors.dateColor,
  },

  location: {
    fontSize: fp(10),
    color: colors.textMuted,
  },

  price: {
    fontSize: 14,
    color: colors.priceColor,
    marginTop: hp(2),
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: hp(10),
  },

  tagsScroll: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: wp(12),
},


  tagsContainer: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: colors.whiteoff,
    paddingHorizontal: wp(12),
    paddingVertical: hp(6),
    borderRadius: 18,
    marginRight: wp(8),
    marginBottom: hp(8),
  },

  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(12),
    gap: wp(14),
    alignSelf: 'flex-start',
  },

  tagText: {
    fontSize: fp(10),
    color: colors.textPrimary,
  },

  actionIcon: {
    width: wp(22),
    height: wp(22),
    resizeMode: 'contain',
  },

  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp(8),
  },
});
