import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';


const EditScreen = ({navigation}) => {
    return (
        <View>
            <Text>Hello-{navigation.getParam('id')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default EditScreen;