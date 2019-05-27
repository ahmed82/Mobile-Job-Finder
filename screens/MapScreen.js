import React, { Component } from 'react';
import { View, TextInput , ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect} from 'react-redux';
import { Button } from 'react-native-elements';
import { Location } from 'expo';

import * as actions from '../actions';

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        location: null,    
    }

  /*   componentWillMount() {
        this._getLocationAsync();
    } */

    componentDidMount() {
        this.setState({ mapLoaded: true});
       /*  if (!Location.hasServicesEnabledAsync()){
            Location.getCurrentPositionAsync(options)
        } */
        
    }

    onRegionChangeComplete = (region) => {
        this.setState({region});
        console.log(region)
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region);
    }

   /*  _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      }; */


    render() {
        if(! this.state.mapLoaded) {
            <View style = {{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" />
            </View>

        }
        return(
            <View style={{ flex: 1 }}>
                <View>
                    <TextInput
                        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable = {true}
                        maxLength = {40}
                    />
            </View>
                <MapView
                    style={{ flex: 1 }}
                    /* initialRegion={{ */
                Region = {this.state.region}
                onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        larg
                        title="Search this Area"
                        backgroundColor="#009688"
                        icon={{name: 'search'}}
                        onPress={this.onButtonPress} // if older syntax function like runder() we should use .bind(this)
                    />
                </View>
            
            </View>
        );
    }
 
}

const styles = {
    buttonContainer: {
        positions: 'absolute',
        bottom:20,
        left: 0,
        tight:0
    }
}

export default connect(null, actions) (MapScreen);