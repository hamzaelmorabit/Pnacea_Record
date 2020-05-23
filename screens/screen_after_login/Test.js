import React, { Component } from 'react';
import {
   StyleSheet,
   View, Text
} from 'react-native';
import * as firebase from 'firebase'
import Tab_bar from './../component/Tab_bar'
import test2_Base from './test2_Base';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class Test extends Component {

   state = {

      email: ''
   };

   // componentDidMount = () => {
   //    // const { email, photoUrl } = firebase.auth().currentUser;
   //    // console.log(firebase.auth().currentUser)
   //    // this.setState({ email });

   // }
   componentDidMount = () => {
  

   }
myFuc = () => {
   // console.log("!!!!")
   test2_Base.helper2("Hii")
}


   render() {

     
      return (
         <View style={styles.container1}>
             {/* <Text >e</Text> */}
             <TouchableOpacity
                     onPress={() => { this.myFuc(); }}
                     ><Text>tesZZt Pag</Text></TouchableOpacity>

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

