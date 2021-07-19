import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LifeCycle extends Component {
  constructor(props) {
      console.log("constructor")
    super(props);
    this.state = {
    };
  }

  static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return null;
  }

  componentDidMount(){
      console.log("componentDidMount")
  }
  render() {
      console.log("render")
    return (
      <View>
        <Text> LifeCycle </Text>
      </View>
    );
  }
}
