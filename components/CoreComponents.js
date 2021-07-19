import React, { Component } from 'react'
import { Text, View ,Image,Dimensions, TextInput,Button,StyleSheet} from 'react-native'
// import Image from 'react-native-scalable-image'

export default class CoreComponents extends Component {
   //state object
    state={
        customerName :'',
        // address :''
    }

    //function
    getCustomerData(){

    }
    getStudent(){
        var name = this.state.customerName;
        console.log(name);
    }

    //render method
    render() {
        return (
            <View>
                {/* <Text style={style.title}> Hello IJSE </Text> */}
                <Text style={{color:"blue"}}> Hello IJSE </Text>
                {/* <Image
                    source={require('../Assests/2.png')}
                    style={{width:200,height:200}}
                /> */}


                <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{width:200 ,height:200 }}
                // resizeMode={'contain'}
                // resizeMode="contain"
                // width={Dimensions.get('window').width}
                />

                <TextInput
                placeholder='Customer Name'
                value={this.state.customerName}
                onChangeText={(value)=>{
                    // console.log(value);
                    this.setState({
                        customerName :value//customer name ekata set wenawa uda ekata
                    })
                }}
                />

                <Button
                title='Print Me'
                onPress={()=>{
                    console.log(this.state.customerName);
                    // console.log("Hello");
                }}
                />



                <Button
                title="Get Student"
                color="red"
                onPress={this.getStudent.bind(this)}
                />
            </View>
        )
    }
}
const style=StyleSheet.create({
    title :{
        color:'green'
    },
    head:{
        marginBottom:20
    }
})

