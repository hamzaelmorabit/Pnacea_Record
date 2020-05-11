import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View, Image,
   ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase'

export default class Loading extends Component {


   //bash kan dkhal l screen kankhetar wash user deja m connect ola la
   // si ah kan dih stack_home l si non stack_home
   componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
         // if (user) {
         // console.log(user.email +"$$$$$$$$$$$$$")
         //    //          // if the user has previously logged in
         //            this.props.navigation.navigate('stack_home')
         //           } else {
         //    //          // if the user has previously signed out from the app
         //            this.props.navigation.navigate('stack_log_in')
         //          }
         console.log("loadin ...")
         this.props.navigation.navigate(
          user ? "stack_home" :
             "stack_log_in")
      })
   }
   // componentDidMount = async () => {
   //    try {
   //      // previously
   //    //   this.loadLocalAsync()

   //      await this.props.firebase.checkUserAuth(user => {
   //        if (user) {
   //          // if the user has previously logged in
   //          this.props.navigation.navigate('stack_home')
   //        } else {
   //          // if the user has previously signed out from the app
   //          this.props.navigation.navigate('stack_log_in')
   //        }
   //      })
   //    } catch (error) {
   //      console.log(error)
   //    }
   //  }

   render() {

      return (
         <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 15 }}>please wait ... </Text>
            {/* <ActivityIndicator size="large"></ActivityIndicator> */}
            <ActivityIndicator style={{
               alignItems: 'center',
               justifyContent: 'center', marginTop: 20
            }} size="large" color="#0000ff" />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },

});