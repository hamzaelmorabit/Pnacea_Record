import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class SendPassword extends Component {

   constructor() {
      super();
   }

   render() {

      return (
         <View style={styles.container}>
            <View style={{
               top: 90, justifyContent: 'center',
               alignItems: 'center'
            }}>
               <Text style={{
                  marginLeft: 24, marginRight: 24, fontSize: 18,
                  textAlign: 'center', fontSize: 15, bottom: 12
               }}>
                  Email sent ! </Text>

               <Image
                  source={require('../images/sendEmail.png')}
                  style={styles.ImageIconStyle}
               />
            </View>
            <TouchableOpacity
               onPress={() => {
                  this.props.navigation.navigate("LogIn")
               }}
               style={styles.buttom}>
               <LinearGradient start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.0, 100]}
                  colors={['#8461c9', '#BD7AE3']}
                  style={styles.gradient}>
                  <Text style={{ color: "#fff" }}>Ok</Text>
               </LinearGradient>
            </TouchableOpacity>
         </View>

      );
   }
}

const styles = StyleSheet.create({
   container: {
      padding: 20,

      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'white',
   },
   gradient: {
      width: 230,
      height: 47,
      height: 52,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttom: {

      borderRadius: 4,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      top: 170,
   },
   ImageIconStyle: {
      height: 70,
      width: 70,
      bottom: 122,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40
   },

});

