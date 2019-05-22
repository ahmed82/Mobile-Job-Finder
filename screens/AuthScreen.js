import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux' ;
import * as actions from '../actions';


class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
        // AsyncStorage.removeItem('fb_token'); // To be remove to keep the login token in devise
        this.onAuthComplete(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps);
    }
onAuthComplete(props) {
    if (props.token){
        this.porops.navigation.navigate("map");
    }
}


    render() {
        return(
            <View />
        );
    }

}
function mapStateToProps({auth}){
    return { token: auth.token }
}

export default connect(mapStateToProps,actions)(AuthScreen);