import React from 'react';
import {
    Platform,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text,
    Switch,
} from 'react-native';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import StaticMap from './examples/StaticMap';


const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

function makeExampleMapper(useGoogleMaps: boolean) {
    if (useGoogleMaps) {
        return (example: any) => [
            example[0],
            [example[1], example[3]].filter(Boolean).join(' '),
        ];
    }
    return (example: any) => example;
}

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            Component: null,
            useGoogleMaps: ANDROID,
        };
        
        
    }
    

    renderExample([Component, title]: any) {
        return (
            <TouchableOpacity
                key={title}
                style={styles.button}
                onPress={() => this.setState({ Component })}>
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }

    renderBackButton() {
        return (
            <TouchableOpacity
                style={styles.back}
                onPress={() => this.setState({ Component: null })}>
                <Text style={styles.backButton}>&larr;</Text>
            </TouchableOpacity>
        );
    }

    renderGoogleSwitch() {
        return (
            <View>
                <Text>Use GoogleMaps?</Text>
                <Switch
                    onValueChange={value => this.setState({ useGoogleMaps: value })}
                    style={styles.googleSwitch}
                    value={this.state.useGoogleMaps}
                />
            </View>
        );
    }

    renderExamples(examples: any) {
        const { Component, useGoogleMaps } = this.state;

        return (
            <View style={styles.container}>
                {Component && (
                    <Component
                        provider={useGoogleMaps ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    />
                )}
                {Component && this.renderBackButton()}
                {!Component && (
                    <ScrollView
                        style={StyleSheet.absoluteFill}
                        contentContainerStyle={styles.scrollview}
                        showsVerticalScrollIndicator={false}>
                        {IOS && this.renderGoogleSwitch()}
                        {examples.map((example: any) => this.renderExample(example))}
                    </ScrollView>
                )}
            </View>
        );
    }

    render() {
        
        return this.renderExamples(
            [
                // [<component>, <component description>, <Google compatible>, <Google add'l description>]
                [StaticMap, 'StaticMap', true],
            ]
        );
       
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    button: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'rgba(220,220,220,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 12,
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: 12,
        borderRadius: 20,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: { fontWeight: 'bold', fontSize: 30 },
    googleSwitch: { marginBottom: 10 },
});
