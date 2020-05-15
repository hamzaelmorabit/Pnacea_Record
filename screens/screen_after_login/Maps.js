import React, { Component } from 'react';
import {
   StyleSheet,
   View, Text
} from 'react-native';
import * as firebase from 'firebase'
import Tab_bar from './../component/Tab_bar'

// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class Account extends Component {

   state = {

      email: ''
   };

   // componentDidMount = () => {
   //    // const { email, photoUrl } = firebase.auth().currentUser;
   //    // console.log(firebase.auth().currentUser)
   //    // this.setState({ email });

   // }
   componentDidMount = () => {
      var user = firebase.auth().currentUser;
      if (user != null) {
         // const { email } = firebase.auth().currentUser;

         this.setState({ email: user.email });
      }

      // this.props.navigation.navigate("my_account")

   }



   render() {

      const { navigation } = this.props;
      const fname = navigation.getParam('user');
      return (
         <View style={styles.container1}>

            <View>
       {/* <Text>MAps maps{JSON.stringify(fname)}</Text> */}
               <Text style={{  alignItems: 'center',  top: 40, fontSize: 30 }}>Maps Page</Text>
            </View>
            <View style={{ top: -20 }}>

               <Tab_bar navigation={this.props.navigation} line_position={-15} name="maps" />
            </View>


         </View>
      );
   }
}

const styles = StyleSheet.create({
   container1: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',

   },
});