import React from 'react';
import {BasePage, BasePageStyles} from "./_base";
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export class DashboardPage extends BasePage {

  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={BasePageStyles.container}>
        <Text>Welcome!</Text>
        <Button title="Logout" onPress={e => { navigate('Welcome'); }}></Button>
      </View>
    );
  }
}