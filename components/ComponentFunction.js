import React from 'react';
import{Text, View,Button, TextInput,Image,StyleSheet} from 'react-native';

export default function ComponentFunction(){
    return(
        <View>
            <Text>This is a function base component</Text>
            <View>
                
            </View>
            <View>

            </View>
            <Button
            title="Click me"
            />
            <TextInput
            placeholder='Enter your name'
            />
            <Image
            source={require('../Assests/reactIcon.png')}
            style={{width:200, height:200}}
            />
                       
                
        </View>
    )
}
// const styles = StyleSheet.create({
//         container:{
//             flex:1,
//             backgroundColor:'Green',
//             alignItems:'center',
//             justifyContent:'center'
//         }
// })