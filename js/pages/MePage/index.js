import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';
class MeScreen extends Component {
    render() {
        return (
            <View  style={{justifyContent:'center', alignItems:'center'}}>
               <Text>MeScreen</Text>
            </View>
        );
    }
}


export default MeScreen
