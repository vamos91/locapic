import React from 'react';
import { View, Text, Button } from 'react-native'


const MapScreen = (props) => {
    return (
        <View>
            <Text>MapScreen</Text>
            <Button 
            title="Go to home"
            onPress={() => props.navigation.navigate("Home")}/>

        </View>


    );
};

export default MapScreen;