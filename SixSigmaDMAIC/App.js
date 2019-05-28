/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import { Navigation } from 'react-native-navigation';
import Welcomeapp from './src/screens/welcome/welcome';
import LoginScreen from "./src/screens/SignIn/SignIn";


// Register Screens
Navigation.registerComponentWithRedux(
  "dmaic.Welcomeapp",
  () => Welcomeapp
 // Provider
);
Navigation.registerComponentWithRedux(
  "dmaic.LoginScreen",
  () => LoginScreen
  //Provider,
  //store
);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: "dmaic.Welcomeapp"
        }
      }],
      options: {
        topBar: {
          title: {
            text: "Six Sigma! DMAIC"
          }
        }
      }
    }
  }
 });