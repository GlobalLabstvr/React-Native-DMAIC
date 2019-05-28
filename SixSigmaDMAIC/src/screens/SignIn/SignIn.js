import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends Component {
    
    render () {
        return (
            <View>
                <Text>Login Screen</Text>
                <Button title="Login" onPress={() => alert("Hello from login")}/>
            </View>
        );
    }
}

export default LoginScreen;