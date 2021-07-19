import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ForgotPWDScreen extends Component {
  constructor(){
    super()
    
  }
  render() {
    const {nic}=this.props.route.params
    return (
      <View>
        <Text> textInComponent {nic} </Text>
      </View>
    )
  }
}
