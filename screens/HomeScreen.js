import React, { useState } from 'react';
import { View, Text, ImageBackground} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Input, Button } from 'react-native-elements';
import {connect} from 'react-redux'



const HomeScreen = (props) => {

    const [text, setText] = useState("")

    const handleNavigate = (username) => {
        props.navigation.navigate("TabNavigator")
        props.setUser(username)
    }

    return (
        <ImageBackground source={require("../assets/favicon.png")} style={{width:"100%", height:"100%"}}>
            <Input
            onChangeText={(value)=>setText(value)}
            value = {text}
            />
            <Button 
            title="Go to map"
            onPress={() => handleNavigate(text)}
            leftIcon={
                <Ionicons name="bicycle" size={24} color="black" />
            }
            />
        </ImageBackground>
        


    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setUser: function(name){
            dispatch({type: "user", user: name})
        }
    }
}

export default connect(
    null,
    mapDispatchToProps    
)(HomeScreen)