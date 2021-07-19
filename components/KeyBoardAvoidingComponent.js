import React, { Component } from 'react'
import { Text, View ,StyleSheet, Button, TextInput, KeyboardAvoidingView,Image} from 'react-native'

export default class KeyBoardAvoidingComponent extends Component {
    render() {
        return (
    //         <KeyboardAvoidingView
    //         behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    //         >

    //             <Image
    //                 source={require('../Assests/reactIcon.png')}
    //                 style={{width:200,height:200}}
    //             />

    //             <TextInput
    //             placeholder ="Student Name"
    //             />
    //             <TextInput
    //             placeholder ="Student Address"
    //             />
    //             <TextInput
    //             placeholder ="Student Marks"
    //             />

    //         </KeyboardAvoidingView>
            // <View style={style.container}>
            //     <TextInput
            //     placeholder="Student Id"
            //     style={style.text}
            //     />

            //     <TextInput
            //     placeholder="Student Name"
            //     style={style.text}
            //     />
                
            //     <Button
            //     title="Save student"
            //     />
            // </View>
            <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
            >
                <Image
                source={require("../Assests/2.png")}
                style={{width:200,height:200}}
                />

                <Text
                style={{fontFamily:'',fontSize:20}}>Hello
                </Text>
                <TextInput
                placeholder="Email"
                style={styles.input}
                
                />
                <TextInput
                placeholder="UserName"
                style={styles.input}
                />
                <TextInput
                placeholder="Password"
                style={styles.input}
                />
                <TextInput
                placeholder="Confirm Password"
                style={styles.input}
                />
                {/* <Button
                title ="Click me"
                /> */}
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        alignItems :'center',
        justifyContent:'center',
        // marginTop:250
    },
    input:{
        height:50,
        backgroundColor:'white',
        marginHorizontal: 10,
        marginVertical: 5,
        width:300,
        marginBottom:5

    }
    // text:{
    //     height:50,

    // }
})