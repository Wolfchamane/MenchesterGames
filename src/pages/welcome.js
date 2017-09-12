import React from 'react';
import {BasePage, BasePageStyles} from './_base';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import {login as Login} from '../firebase/methods/login';

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  info: {
    fontSize: 16,
    textAlign: 'left',
    padding: 5
  },
  login: {
    width: Dimensions.get('window').width - 10,
    margin: 5,
    padding: 5,
    overflow: 'hidden'
  },
});

export class WelcomePage extends BasePage {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      navigate: null
    };
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  _login() {
    Login(this.state.email, this.state.password).then(
      user => {
        this.navigate('Dashboard', {user: user});
      }
    ).catch(
      error => {}
    );
  }

  render() {

    this.navigate = this.props.navigation;

    return (
      <View style={BasePageStyles.container}>
        <Text style={styles.welcome}>
          Menchester United Games
        </Text>
        <Text style={styles.info}>
          Use your pre-registered email and password to login.
        </Text>
        <View style={styles.login}>
          <TextInput keyboardType="email-address" placeholder="Email" onChangeText={email => this.setState({email})}></TextInput>
          <TextInput keyboardType="default" secureTextEntry placeholder="Password" onChangeText={password => this.setState({password})}></TextInput>
          <Button title="Login" onPress={e => { this._login(); }}></Button>
        </View>
      </View>
    );
  }
}