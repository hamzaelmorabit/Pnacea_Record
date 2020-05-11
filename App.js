import * as firebase from 'firebase';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Loading from './screens/Loading';
import LogIn from './screens/LogIn';
import SendPassword from './screens/SendPassword';
import SignUp from './screens/SignUp';
import Account from './screens/screen_after_login/Account'
import Searsh from './screens/screen_after_login/Searsh'
import Notifications from './screens/screen_after_login/Notifications'
import Maps from './screens/screen_after_login/Maps'
// import Ionicons from "@expo/vector-icons"

// import Icon from 'react-native-vector-icons/FontAwesome';
var firebaseConfig = {
  apiKey: "AIzaSyDmcfRCWfIWMEPNkX-JVqRxeMU72M1JgWY",
  authDomain: "myapp-80a7b.firebaseapp.com",
  databaseURL: "https://myapp-80a7b.firebaseio.com",
  projectId: "myapp-80a7b",
  storageBucket: "myapp-80a7b.appspot.com",
  messagingSenderId: "808651525934",
  appId: "1:808651525934:web:c1f13cd2fc25dc2d84f4bf"
};

//hadi dertha kan kaytela3 lya wahd l erreur bli rani aandi joj dyal firebase m installin
// 9albt aaliha o l9it hadi 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.auth().onAuthStateChanged((user) => {
//   if(user){
//     this.setState({ loggedIn: true})
//   } else {
//     this.setState({loggedIn: false})
//   }
// })


const stack_home = createStackNavigator({

  Home:
  {
    screen: Home,
    navigationOptions: {
      title: '',
    }


  },
  
  navig_maps:
  {
    screen: Maps,
    navigationOptions: {
      title: '',
      // header: null,
    }
  },
  navig_account:
  {
    screen: Account,
    navigationOptions: {
      title: '',
    },
  },

  navig_searsh: {
    screen: Searsh,
    navigationOptions: {
      title: '',
      // header: null,
    }
  },
  navig_notifactions: {
    screen: Notifications,
    navigationOptions: {
      title: '',
      // header: null,
    }
  }
})

const log_in = createStackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0
      },
      headerTitleStyle: {
      },
    },
  },

})
// const SignUp_ = createStackNavigator({
// SignUp: {
//   screen: SignUp,
//   navigationOptions: {
//     title: 'Sign up',

//     headerTitleStyle: {
//       // fontWeight: 'bold',
//       left: 70,
//     },
//   },
// },})
// stack concerne log in fin anb9a n naviguer bteween screen
const stack_log_in = createStackNavigator({


  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0
      },
      headerTitleStyle: {
      },
    },
  },


  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: 'Reset password',
      headerTitleStyle: {
        left: 40,
      },
    },
  },

  SendPasswordConfirm: {
    screen: SendPassword,
    navigationOptions: {
      title: 'Reset password',

      headerTitleStyle: {
        // fontWeight: 'bold',
        left: 40,
      },
    },
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign up',

      headerTitleStyle: {
        // fontWeight: 'bold',
        left: 70,
      },
    },
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0
      },
      headerTitleStyle: {
      },
    },
  },
})


export default createAppContainer(
  createSwitchNavigator({

    Loading: Loading,
    log_in:log_in,
    stack_log_in: stack_log_in,
    //  SignUp_:SignUp_,
 
   
    // LogIn : LogIn ,
    //Home : Home ,
    stack_home: stack_home,

  },
    {
    initialRouteName: "Loading"
    }
  )
)



 // elevation: 0
      // tabBarIcon: ({ focused, tintColor }) => {
      //   let iconName;

      //     iconName = 'ios-information-circle-outline';


      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return <Ionicons name={iconName} size={25} color={tintColor} />;
      // },
      // tabBarOptions: {
      //   activeTintColor: 'tomato',
      //   inactiveTintColor: 'gray',
      // },
      // tabBarComponent: TabBarBottom,
      // tabBarPosition: 'bottom',
      // animationEnabled: false,
      // swipeEnabled: false,

      // tabBarIcon : () =><Ionicons
      // name="ios-home"
      // backgroundColor="#3b5998" Ionicons from @expo/vector-icons
      // color="red"
      // onPress={this.loginWithFacebook} />  
       // onPress={this.loginWithFacebook} />  
        // onPress={this.loginWithFacebook} />  
         // onPress={this.loginWithFacebook} />  
          // onPress={this.loginWithFacebook} />  
