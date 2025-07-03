import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import { validateEmail, validatePassword } from '../utils/validation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const DUMMY_EMAIL = 'test@gmail.com';
const DUMMY_PASSWORD = 'Test@123';

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    if (emailErr || passwordErr) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
        navigation.replace('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    }, 1000);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>My Football App</Text>
      </View>
      <View style={styles.card}>
        <CustomInput
          value={email}
          onChangeText={text => {
            setEmail(text);
            if (emailError && !validateEmail(text)) setEmailError(null);
          }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError || undefined}
        />
        <View style={{ position: 'relative' }}>
          <CustomInput
            value={password}
            onChangeText={text => {
              setPassword(text);
              if (passwordError && !validatePassword(text))
                setPasswordError(null);
            }}
            placeholder="Password"
            secureTextEntry={!showPassword}
            error={passwordError || undefined}
          />
          <TouchableOpacity
            style={styles.showHideBtn}
            onPress={() => setShowPassword(prev => !prev)}
          >
            <Text style={styles.showHideText}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>{'Login'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    letterSpacing: 1,
  },
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#a0c4ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  showHideBtn: {
    position: 'absolute',
    right: 12,
    top: 18,
    padding: 4,
  },
  showHideText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 13,
    bottom: 5,
  },
  forgotText: {
    color: '#007AFF',
    marginTop: 16,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
