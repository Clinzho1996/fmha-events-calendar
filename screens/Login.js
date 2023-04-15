/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Login = ({navigation}) => {
  const [hidden, setHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const changeStatusBarVisibility = () => setHidden(!hidden);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  function Login() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        console.log('User account created & signed in!');
        navigation.navigate('Loading');
      })
      .catch(error => {
        alert(error);

        console.error(error);
      });
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#121212',
        alignItems: 'center',
        height: height,
        paddingTop: 50,
      }}>
      <StatusBar
        backgroundColor="#121212"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Image
          source={require('../assets/playstore.png')}
          style={{width: 80, height: 80, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: '#99dd7a',
            marginLeft: 10,
            paddingTop: 10,
          }}>
          FMHA Events Calendar
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20, paddingBottom: 30}}>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 16,
              lineHeight: 24,
              color: '#828282',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Welcome back, we are glad you {'\n'}came back.🙃
          </Text>
        </View>
        <View style={styles.input}>
          <Icon
            name="person-outline"
            color="#808080"
            size={20}
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 6,
              borderColor: '#808080',
            }}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#808080"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{fontSize: 16, color: '#808080', paddingLeft: 20}}
          />
        </View>
        <View style={styles.input}>
          <Icon
            name="lock-closed-outline"
            color="#808080"
            size={20}
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 6,
              borderColor: '#808080',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#808080"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
              style={{
                fontSize: 16,
                color: '#808080',
                paddingLeft: 20,
                width: 240,
              }}
            />
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginTop: 10,
              }}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={'#C4C4C4'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 0,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}
            onPress={() => navigation.navigate('Forgot')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#C4C4C4',
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            style={isLoading ? styles.buttonLoading : styles.btn}
            onPress={() => navigation.navigate('Loading')}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnText}>
                {isLoading ? 'Loading' : 'Login'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: '#828282', fontSize: 16, marginRight: 10}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                color: '#99dd7a',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#232323',
    margin: 20,
    borderRadius: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: '#303030',
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#99dd7a',
    marginTop: 20,
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
