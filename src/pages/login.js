import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    StatusBar,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { TextInput, Button } from 'react-native-paper';

class Login extends React.Component {

    state = { showIndicator: false, email: "", senha: "" };

    static navigationOptions = {
        tabBarVisible: false
    }
    onButtonPress = () => {

        if (this.state.email.trim() === "" || this.state.senha.trim() === "") {
            if (this.state.email.trim() === "" && this.state.senha.trim() === "") {
                this.setState(() => ({
                    nameErrorEmail: "O email é obrigatório",
                    nameErrorSenha: "A senha é obrigatória"
                }
                ));
            } else if (this.state.email.trim() === "") {
                this.setState(() => ({ nameErrorEmail: "O email é obrigatório" }));
            } if (this.state.senha.trim() === "") {
                this.setState(() => ({ nameErrorSenha: "A senha é obrigatória" }));
            }

        } else {
            this.setState(() => ({ nameError: null, showIndicator: true, }));
        }
    };

    render() {
        let that = this;
        const { navigate } = this.props.navigation;

        if (this.state.showIndicator == false) {
            return (

                <>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView>
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={styles.container}
                        >
                            <ScrollView
                                contentInsetAdjustmentBehavior="automatic"
                                style={styles.scrollView}>
                                <Image style={styles.logo} source={require('../assets/logo.png')} />

                                <Text style={styles.text}>Para acessar o app informe seu <Text style={styles.textBold}>email</Text> </Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"
                                    theme={{ colors: { primary: "#009688", background: Colors.white } }}
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                />
                                {!!this.state.nameErrorEmail && (
                                    <Text style={styles.error}>{this.state.nameErrorEmail}</Text>
                                )}
                                <Text style={styles.text}>Agora digite sua <Text style={styles.textBold}>senha</Text></Text>

                                <TextInput style={styles.textInput}
                                    placeholder="Senha"
                                    theme={{ colors: { primary: "#009688", background: Colors.white } }}
                                    onChangeText={senha => this.setState({ senha })}
                                    value={this.state.senha} />
                                {!!this.state.nameErrorSenha && (
                                    <Text style={styles.error}>{this.state.nameErrorSenha}</Text>
                                )}
                                <Button style={styles.buttonAcessar}
                                    mode="contained"
                                    color={"#D73F8C"}
                                    onPress={this.onButtonPress} >Acessar</Button>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </SafeAreaView>
                </>
            );

        } else {
            setTimeout(function () { that.setState({ showIndicator: false }) }, 2000);
            setTimeout(function () { navigate('PaginaPrincipal') }, 2000);
            return (

                <>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView>
                        <ActivityIndicator size="large" color={Colors.black} />
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <Image style={styles.logo} source={require('../assets/logo.png')} />
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
        marginTop: 163,
        height: 70,
        justifyContent: "center",
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    error: {
        color: "red",
        marginLeft: 10,
        marginTop: 10
    }
});

export default Login;