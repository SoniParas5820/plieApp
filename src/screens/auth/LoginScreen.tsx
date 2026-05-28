import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useLoginMutation } from '../../services/coreApi';
import styles from './styles';
import { Images } from '../../assets';
import AppStyles from '../../theme/appStyles';
import Strings from '../../utils/strings';
import { EMAIL_REGEX } from '../../utils/validation';

interface LoginFormState {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [form, setForm] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const [secure, setSecure] = useState(true);
  const [login, { isLoading }] = useLoginMutation();

  const normalizedEmail = form.email.trim();
  const normalizedPassword = form.password.trim();

  const isEmailValid = useMemo(
    () => EMAIL_REGEX.test(normalizedEmail),
    [normalizedEmail],
  );

  const isFormValid = useMemo(
    () => isEmailValid && normalizedPassword.length > 0,
    [isEmailValid, normalizedPassword],
  );

 const onLogin = async () => {
  if (!isFormValid) {
    Alert.alert(
      Strings.login.validationTitle,
      Strings.login.validationMessage,
    );
    return;
  }

  try {
    const res = await login(form).unwrap();

    if (!res.success) {
      Alert.alert(
        Strings.login.loginFailedTitle,
        res.message || Strings.login.loginFailedMessage,
      );
    }

  } catch (error: any) {
    Alert.alert(
      Strings.login.loginFailedTitle,
      error?.data?.message || Strings.login.loginFailedMessage,
    );
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.logoText, AppStyles.robotoBold]}>
          {Strings.login.title}
        </Text>

        <View style={styles.imagePlaceholder}>
          <Image source={Images.User} style={styles.placeholderIcon} />
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>{Strings.login.email}</Text>
        <View style={styles.inputCard}>
          <TextInput
            placeholder={Strings.login.email}
            style={[styles.input, AppStyles.robotoRegular]}
            value={form.email}
            onChangeText={text => setForm(prev => ({ ...prev, email: text }))}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>{Strings.login.password}</Text>
        <View style={styles.inputCard}>
          <TextInput
            placeholder={Strings.login.password}
            style={[styles.input, AppStyles.robotoRegular]}
            secureTextEntry={secure}
            value={form.password}
            onChangeText={text =>
              setForm(prev => ({ ...prev, password: text }))
            }
          />

          <TouchableOpacity
            style={styles.eyeBtn}
            onPress={() => setSecure(!secure)}
          >
            <Image source={Images.Eye} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => {
            Alert.alert('Under Development');
          }}
        >
          <Text style={[styles.forgotText, AppStyles.robotoRegular]}>
            {Strings.login.forgotPassword}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.loginButton,
            (!isFormValid || isLoading) && styles.loginButtonDisabled,
          ]}
          onPress={onLogin}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text style={[styles.loginText, AppStyles.robotoMedium]}>
              {Strings.login.signIn}
            </Text>
          )}
        </TouchableOpacity>

        <Text style={[styles.signupText, AppStyles.robotoRegular]}>
          {Strings.login.notMember}
          <Text style={styles.signupLink}>{Strings.login.signUpHere}</Text>
        </Text>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>{Strings.login.orSignInWith}</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <Image source={Images.GoogleLogo} style={styles.socialIcon} />
          <Image source={Images.AppleLogo} style={styles.socialIcon} />
          <Image source={Images.FacebookLogo} style={[styles.socialIcon,{
            marginTop:4
          }]} />
        </View>
      </View>

      <Text style={[styles.guestText, AppStyles.robotoRegular]}>
        {Strings.login.enterAsGuest}
      </Text>
    </View>
  );
};

export default LoginScreen;
