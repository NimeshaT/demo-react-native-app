import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import { color, Value } from 'react-native-reanimated';
import DefaultScreen from './DefaultScreen';
import SignUpScreen from './SignUpScreen';
import ReportScreen from './ReportScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nic: '',
            password: '',

        }
        this.getData()
    }


    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('isLogged', this.state.nic)
            console.log('Store Data :' + value)
        } catch (e) {
            // saving error
        }
    }
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogged')
            if (value !== null) {
                console.log('getData :' + value)

                this.props.navigation.navigate('ReportScreen', { nic: value })

            } else {

            }
        } catch (e) {

        }
    }
    removeValue = async () => {
        try {
            await AsyncStorage.removeItem('isLogged')
        } catch (e) {
            // remove error
        }

        console.log('Done.')
    }
    getUser = () => {
        fetch('http://192.168.8.101:3000/user/oneuser/' + this.state.nic, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => this.passwordMatch(json.password))

    }


    passwordMatch(password) {
        if (this.state.password == password) {
            console.log('wade goda')
            this.storeData()
            //this.props.navigation.navigate(DefultScreen)
            //this.props.navigation.navigate('ReportScreen',{nic:this.state.nic})
            this.props.navigation.navigate('ReportScreen', { nic: this.state.nic })
        } else {
            console.log('nop')
        }

    }

    getSignup = () => {
        this.props.navigation.navigate(SignUpScreen)
    }

    render() {

        return (

            <View>


                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#6c5ce7" />
                    <Body>
                        
                    </Body>
                </Header>
                <Title style={styles.Title}>DEMOAPP</Title>
                <Text style={styles.Pagetitle}>
                    Login Here...
                </Text>
                <Item rounded style={styles.InputFeilds}>
                    <Input
                        placeholder='Enter ID'
                        style={styles.New}
                        value={this.state.nic}
                        type="text"
                        name="nic"
                        onChangeText={(value) => {
                            this.setState({
                                nic: value
                            })
                        }}

                    />
                </Item>
                <Item rounded style={styles.InputFeilds}>
                    <Input
                        placeholder='Enter Password'
                        style={styles.New}
                        value={this.state.password}
                        type="text"
                        name="password"
                        onChangeText={(value) => {
                            this.setState({
                                password: value
                            })
                        }}
                    />
                </Item>
                <Button style={styles.Button}
                    onPress={this.getUser}

                >
                    <Text style={styles.ButtonText}> Login </Text>
                </Button>

                <Button style={styles.Button}
                    onPress={this.getSignup}
                //onPress={()=>this.props.navigation.navigate('ReportScreen',{nic:"hello"})}

                >
                    <Text style={styles.ButtonText}> Register </Text>
                </Button>

                {/* <Text style={styles.NormalText}> Forgot Password </Text> */}

            </View>


        )
    }
}
const styles = StyleSheet.create({
    Title: {
        fontSize: 50,
        left: 10,
        textAlign: 'center',
        color: '#e84393',
    },
    Header: {
        backgroundColor: '#6c5ce7',
    },
    Pagetitle: {
        marginTop: 70,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20

    },
    InputFeilds: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        height: 43,
        backgroundColor: '#EDEDED'
    },
    New: {
        paddingLeft: 20
    },
    Button: {
        backgroundColor: '#e84393',
        borderRadius: 50,
        paddingLeft: 70,
        paddingRight: 90,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        paddingTop:0

    },
    ButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingTop:0
    },
    NormalText: {
        textAlign: 'center',
        marginTop: 5,
        color: 'grey'
    }



})