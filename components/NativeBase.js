import React, { Component } from 'react';
import { View } from 'react-native';
import {Button ,Text} from 'native-base';

export default class nativeBase extends Component {
  
  render() {
    return (
      <View>
        <Text> nativeBase </Text>
        <Button primary><Text> Primary </Text></Button>
        <Button rounded danger>
            <Text>Danger</Text>
          </Button>
      </View>
    );
  }
}
