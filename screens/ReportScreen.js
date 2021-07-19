import React, { Component } from 'react'
import { View, StyleSheet, StatusBar,Image } from 'react-native'
import { Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Body, Title, Icon, Text } from 'native-base';
import LoginScreen from './LoginScreen';


export default class ReportScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nic: '',
            name: '',

        }
    }
    passNICToAnotherScreen(pass) {
        console.log(pass + " - pass data");
        fetch('http://192.168.8.101:3000/user/oneuser/' + pass, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => console.log(json))
            
    }
    componentDidMount() {


    }
    render() {
        const { nic } = this.props.route.params

        return (
            <Container>

                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#6c5ce7" />
                    <Body>
                        <Title style={styles.Title}>Report Here...</Title>
                    </Body>
                </Header>
                <Content>
                    
                    <Card style={styles.Card}>
                        <CardItem style={styles.CardItem}>
                            <Body>
                                <Text>
                                    Your ID : {nic}
                                </Text>
                                <Text style={styles.Welcome}>
                                    Welcome to the report section...
                                </Text>
                                <Image
                                    source={require('../Assests/report.png')}
                                    style={{width:300,height:250}}
                                />
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical onPress={() => this.props.navigation.navigate('ReportScreen'), this.passNICToAnotherScreen(nic)}>
                            {/* <Icon name="apps" style={styles.Icon} /> */}
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('ExpensesScreen', { nic: nic })}>
                            
                            <Text style={styles.Icon}>Exchange</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('RecordScreen', { nic: nic })}>
                            {/* <Icon name="navigate" style={styles.Icon} /> */}
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
    },
    CardItem: {
        
       

    },
    Card:{
        borderRadius: 10,
        color: '#fff',
        borderWidth:1,
        height:450,
        
    },
    Welcome:{
        fontSize:25,
        marginTop:15,
        // paddingBottom:25
    }

})