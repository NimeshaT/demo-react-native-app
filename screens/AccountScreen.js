import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Button, Content, Footer, FooterTab, Icon } from 'native-base';

export default class AccountScreen extends Component {
    constructor() {
        super()
        this.state = {
            nic: ''
        }
        this.getData()

    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogged')
            if (value !== null) {
                console.log('0' + value)
                this.setState({ nic: value })
                this.getUser
            }
        } catch (e) {
            // error reading value
        }
    }
    getUser = () => {
        fetch('http://192.168.8.101:3000/user/oneuser/' + this.state.nic, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => console.log(json))

    }

    render() {
        const { nic } = this.props.route.params
        return (
            <Container>

                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#6c5ce7" />
                    <Body>
                        <Title style={styles.Title}>My Account</Title>
                    </Body>
                </Header>

                
                <Content>

                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical  onPress={() => this.props.navigation.navigate('ReportScreen')}>
                            
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('ExpensesScreen', { nic: nic })}>
                            
                            <Text style={styles.Icon}>Exchange</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('RecordScreen', { nic: nic })}>
                            
                            <Text style={styles.Icon}>Record</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('AccountScreen', { nic: nic })}>
                            
                            <Text style={styles.Icon}>Account</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        )
    }
}


const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        left: 10,
        textAlign: 'center',
        color: '#fff',
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
    Footer: {
        
        backgroundColor: '#fd79a8',
    },
    Icon: {
        
        color: '#fff',
    }
})