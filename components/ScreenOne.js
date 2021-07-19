import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Text> ScreenOne </Text>
        <Button rounded success
            onPress={()=>{
                this.props.navigation.navigate('ScreenTwo')
            }}
        >
            <Text>Load screen two</Text>
        </Button>
      </View>
    );
  }
}
// const styles=StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent:'center',
//         alignItems: 'center'
//     }
// })