import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export class BasePage extends Component {}

export const BasePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});