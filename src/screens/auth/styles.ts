import { StyleSheet, Platform } from 'react-native';
import { wp, hp, fp } from '../../theme/metrics';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textWhite,
  },

  header: {
    height: hp(363),
    backgroundColor: colors.headerBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    fontSize: fp(70),
    color: colors.textPrimary,
    marginBottom: hp(80),
  },

  imagePlaceholder: {
    width: wp(80),
    height: wp(80),
    borderRadius: wp(16),
    backgroundColor: colors.iconBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderIcon: {
    width: wp(42),
    height: wp(42),
    tintColor: colors.iconTint,
  },

  form: {
    paddingHorizontal: wp(24),
    paddingTop: hp(20),
  },

  label: {
    fontSize: fp(13),
    color: colors.textPrimary,
    marginBottom: hp(6),
  },

  inputCard: {
    height: hp(50),
    backgroundColor: colors.textWhite,
    borderRadius: wp(10),
    paddingHorizontal: wp(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(16),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  input: {
    flex: 1,
    fontSize: fp(14),
    color: colors.textPrimary,
  },

  eyeBtn: {
    padding: wp(6),
  },

  eyeIcon: {
    width: wp(20),
    height: wp(20),
    tintColor: colors.textMuted,
  },

  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: hp(20),
  },

  forgotText: {
    fontSize: fp(12),
    color: colors.textSecondary,
  },

  loginButton: {
    width: wp(98),
    height: hp(35),
    backgroundColor: colors.primary,
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  loginButtonDisabled: {
    backgroundColor: colors.disabled,
  },

  loginText: {
    fontSize: fp(16),
    color: colors.textWhite,
  },

  signupText: {
    marginTop: hp(8),
    textAlign: 'center',
    fontSize: fp(12),
    color: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },

  signupLink: {
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(60),
    marginBottom: hp(50),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.divider,
  },

  orText: {
    marginHorizontal: wp(10),
    fontSize: fp(12),
    color: colors.textMuted,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(18),
  },

  socialIcon: {
    width: wp(44),
    height: wp(44),
    resizeMode: 'contain',
  },

  guestText: {
    position: 'absolute',
    bottom: hp(50),
    right: wp(24),
    fontSize: fp(12),
    color: colors.textMuted,
  },
});

export default styles;
