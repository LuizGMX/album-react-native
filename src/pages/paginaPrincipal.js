import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    ActivityIndicator
} from 'react-native';

import api from '../api';

class PaginaPrincipal extends React.Component {

    state = {
        imagens: [],
    };

    UNSAFE_componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        imagens: data
                    });
                });
            });
    }

    renderImagens() {        
        return this.state.imagens.map(imagens => <Image key={imagens.id} style={styles.imagens} source={{uri:imagens.url}} />);
    }

    render() {

        return (

            <>

                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <View style={styles.sideBySideImages}>                            
                            {this.renderImagens()}
                            <Image />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}


const styles = StyleSheet.create({
    imagens: {
        width: "45%",
        height: 183,
        marginBottom: 5,
        marginTop: 5,
        marginStart: "3%",
        marginEnd: "1%"
    },
    sideBySideImages: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default PaginaPrincipal;