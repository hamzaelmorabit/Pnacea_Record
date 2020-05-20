import React, { Component } from 'react';
import {
   StyleSheet,
   View, Text
} from 'react-native';


// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class headerLeftComponent extends Component {

   state = {

      email: ''
   };

   componentDidMount = () => {
   

   }



   render() {

      return (
         <View style={styles.container1}>

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