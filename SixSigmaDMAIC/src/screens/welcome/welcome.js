import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';
import backgroundImage from "../../assets/welcomeImage.jpg";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import LoginScreen from "../SignIn/SignIn";

class WelcomeScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "Portrait" :"Landscape"        
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }
    
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }
    
    updateStyles = dims => {
        this.setState({
          viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

   // loginHandler = () => {
   //   LoginScreen();
   // }

    render() {
        let headingText = null;

        if (this.state.viewMode === "portrait") {
            headingText = (
              <MainText>
                <HeadingText>Welcome To DMAIC</HeadingText>
              </MainText>
            );
        }
        return (
            <View style={styles.container}>
              <Image source={backgroundImage} style={styles.backgroundImage}/>
              
                {headingText}
                <ButtonWithBackground color="#29aaf4" onPress={LoginScreen}>
                    Login
                </ButtonWithBackground>                            
                <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
                    Create an Account
                </ButtonWithBackground>
              </View>
            
        );

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    backgroundImage: {
      width: "90%",
      height: "50%",
      flex: 2
    }
});

export default WelcomeScreen;