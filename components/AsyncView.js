import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', "Thilini")
      console.log("data saved")
    } catch (e) {
      // saving error
    }
  }

  
   getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('name')
    if(value!=null){
      console;e.log("value is "+value);
    }
  } catch(e) {
    // error reading value
  }
}


removeValue = async () => {
  try {
    await AsyncStorage.removeItem('name')
    console.log("data removed")
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}


  render() {
    return (
      <View>
        <Button rounded success
            onPress={this.storeData.bind(this)}
        >
            <Text>Save data</Text>
        </Button>

        <Button rounded warning
            onPress={this.getData.bind(this)}
        >
            <Text>Load data</Text>
        </Button>


        <Button rounded danger
            onPress={this.removeValue.bind(this)}
        >
            <Text>Remove data</Text>
        </Button>

      </View>
    );
  }
}
