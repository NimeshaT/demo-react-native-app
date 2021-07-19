import React, { Component } from 'react'
import { View } from 'react-native'
import ForgotPWDScreen from './ForgotPWDScreen'
import { Container, Header, Content, Button, Text } from 'native-base';
export default class EmailVerification extends Component {
  constructor(props){
    super(props)
   
  }
  render() {

    
    return (

      <View>
        <Text> textInComponent </Text>
        <Button onPress={()=>this.props.navigation.navigate('ForgotPWDScreen',{nic:'thili'})}>
          <Text>Click Me!</Text>
        </Button>
      </View>
    )
  }
}
