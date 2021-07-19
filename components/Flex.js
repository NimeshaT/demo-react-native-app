//rnc
import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Flex extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}> 
         {/* //searchBar */}
        </View>
        <View style={styles.view2}>
        {/* //tabel */}
        </View>
        <View style={styles.view3}>
        {/* //text */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fa9905'
    },
    view1:{
      flex:1.5,
      backgroundColor:'#ff5200'
    },
    view2:{
      flex:5,
      backgroundColor:'#f21170'
    },
    view3:{
      flex:0.5,
      backgroundColor:'#3d84b8'
    }

})