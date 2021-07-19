// const { Component } = require("react")

import React, { Component } from 'react';
 import {View,Text,Button, KeyboardAvoidingView} from 'react-native';
// import ComponentClass from './components/ComponentClass';
// import ComponentFunction from './components/ComponentFunction';
// import CoreComponents from './components/CoreComponents';
// import ScrollViewComponent from './components/ScrollViewComponent'
// import KeyBoardAvoidingComponent from './components/KeyBoardAvoidingComponent';
// import Flex from './components/Flex';
// import NativeBase from './components/NativeBase';
// import Parent from './components/Parent';
// import ScreenOne from './components/ScreenOne';
// import ScreenTwo from './components/ScreenTwo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncView from './components/AsyncView';
// import Fetch from './components/Fetch';
// import LifeCycle from './components/LifeCycle';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import DefaultScreen from './screens/DefaultScreen';
import ReportScreen from './screens/ReportScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import AccountScreen from './screens/AccountScreen';
import EmailVerification from './screens/EmailVerification';
import RecordScreen from './screens/RecordScreen';
import ForgotPWDScreen from './screens/ForgotPWDScreen';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      // <View>
      // {/* <Text> Welcome to React Native </Text> */}
      // {/* <ComponentClass/> */}
      // {/* <ComponentFunction/> */}
      // {/* <CoreComponents/> */}
      // {/* <ScrollViewComponent/> */}
      // </View>
      // <KeyBoardAvoidingComponent/>
        // <Flex/>
    
      // <NativeBase/>
      // <Parent/>
      // <ScreenOne/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="DefultScreen" component={DefultScreen} options={{ headerShown: false }} />  */}
          
          <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ReportScreen" component={ReportScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}