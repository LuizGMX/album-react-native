import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-paper';

function Mais({ navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Text style={styles.text}>Teste Técnico CTIS</Text>
                    <Text style={styles.text}>Versão 1.0.2 (Número da build 10)</Text>
                    <Button mode="contained" color={"#ffff"}
                     style={styles.buttonSair}
                     onPress={() => navigation.navigate('Login')}>
                     Sair</Button>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    text: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Roboto_400Regular'
    },
    buttonSair: {
        alignItems: "flex-start",
        width: "100%",
        marginLeft: 10
    }
});


export default Mais;