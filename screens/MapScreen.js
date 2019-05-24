import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect} from 'react-redex';

import * as actions from '../actions';
class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,}
    }

    componentDidMount() {
        this.setState({ mapLoaded: true});
    }

    onRegionChangeComplete = (region)=>{
        // console.log(region);
        this.setState({region});
    }
    render() {
        if(! this.state.mapLoaded) {
            <View style = {{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" />
            </View>

        }
        return(
            <MapView
                style={{ flex: 1 }}
                /* initialRegion={{ */
               Region = {this.state.region}
               onRegionChangeComplete={this.onRegionChangeComplete}
               />
        );
    }

}

export default MapScreen;