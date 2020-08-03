import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    StatusBar,
    ActivityIndicator
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { TextInput, Button } from 'react-native-paper';


class Login extends React.Component {

    state = { showIndicator: false };

    onButtonPress = () => {


        this.setState({
            showIndicator: true,
        });
    };

    render() {
        let that = this;
        const { navigate } = this.props.navigation;



        if (this.state.showIndicator == false) {
            return (

                <>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView>
                    
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <Image style={styles.logo} source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/51DZ9F/d7/f8/d2/d7f8d28fbec943bdad56fce180f343a6/images/login/u1.jpg?token=43ba675faeea0b2e152d571b0f5d9634dbba8371a7d1a8c6fbef673dea3ffc12' }} />
                        </ScrollView>
                        <Text style={styles.text}>Para acessar o app informe seu <Text style={styles.textBold}>email</Text> </Text>
                        <TextInput style={styles.textInput} placeholder="Email" theme={{ colors: { primary: "#009688", background: Colors.white } }} />
                        <Text style={styles.text}>Agora digite sua <Text style={styles.textBold}>senha</Text></Text>

                        <TextInput style={styles.textInput} placeholder="Senha" theme={{ colors: { primary: "#009688", background: Colors.white } }} />
                        <Button style={styles.buttonAcessar}
                            mode="contained"
                            color={"#D73F8C"}
                            onPress={this.onButtonPress} >Acessar</Button>
                    </SafeAreaView>
                </>
            );

        } else {
            setTimeout(function () { that.setState({ showIndicator: false }) }, 3000);
            setTimeout(function () { navigate('PaginaPrincipal') }, 3000);
            return (

                <>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView>
                        <ActivityIndicator size="large" color={Colors.black}  />
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <Image style={styles.logo} source={{ uri: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/51DZ9F/d7/f8/d2/d7f8d28fbec943bdad56fce180f343a6/images/login/u1.jpg?token=43ba675faeea0b2e152d571b0f5d9634dbba8371a7d1a8c6fbef673dea3ffc12' }} />
                        </ScrollView>
                        <Text style={styles.text}>Para acessar o app informe seu <Text style={styles.textBold}>email</Text> </Text>
                        <TextInput style={styles.textInput} placeholder="Email" theme={{ colors: { primary: "#009688", background: Colors.white } }} />
                        <Text style={styles.text}>Agora digite sua <Text style={styles.textBold}>senha</Text></Text>
                        <TextInput style={styles.textInput} placeholder="Senha" theme={{ colors: { primary: "#009688", background: Colors.white } }} />
                        <Button style={styles.buttonAcessar}
                            mode="contained"
                            color={"#D73F8C"}
                            onPress={this.onButtonPress} >Acessar</Button>
                    </SafeAreaView>
                </>
            );

        }
    }

}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    logo: {
        width: 101,
        height: 101,
        alignSelf: "center",
        marginBottom: 35,
        marginTop: 20
    },
    text: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Roboto_400Regular'
    },
    textBold: {
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
        fontWeight: "bold"
    },
    textInput: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 42
    },
    buttonAcessar: {
        marginTop: 110,
        height: 70,
        justifyContent: "center",
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

export default Login;