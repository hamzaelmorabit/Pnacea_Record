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
     
         console.log("loadin ...")
         this.props.navigation.navigate(
          user ? "stack_home" :
             "stack_log_in")
      })
   }
  
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