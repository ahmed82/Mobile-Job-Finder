
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// AsyncStorage.setItem('fb_token')
/* export const facebookLogin = () => {
    return function(dispatch) {
        let token = await AsyncStorage.getItem('fb_token');
        if (toked) {
            //Dispath an action : Fb Login is done
        } else {
            // start up FB Login process
        }
    }
}; that section beeing refactor in the next section */

export const facebookLogin = () => async dispatch => {
        let token = await AsyncStorage.getItem('fb_token');
        if (toked) {
            //Dispath an action: Fb Login is done
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        } else {
            // Start up FB Login process
            doFacebookLogin(dispatch);
        }
    };

   const doFacebookLogin = async (dispatch) => {
       let { type, token} = await Facebook.logInWithReadPermissionsAsync('2380414738686574', {
           permissions: ['public_profile']
       });

       if (type === 'cancel') {
           return dispatch ({ type: FACEBOOK_LOGIN_FAIL })
       }
       await AsyncStorage.setItem('fb_token',token);
       dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        
    };
