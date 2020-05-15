import React, { Component } from 'react';
import { TextInput, StyleSheet, Alert, TouchableOpacity, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';
// import Loader from '../Loader';
// import { Alert, Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default class ResetPassword extends Component {

   constructor() {
      super();
   }
   state = {
      current_pwd: "",
      new_pwd: "",
      confirm_pwd: "",


      current_pwd_error: null,
      confirm_pwd_error: null,
      new_pwd_error: null,
      is_click_confirm: null,
      //  loading:false

   }


   reauthenticate = (currentPassword) => {
      var user = firebase.auth().currentUser;
      // console.log("  user.email!" + user.email);
      var cred = firebase.auth.EmailAuthProvider.credential(
         user.email, currentPassword);
      return user.reauthenticateWithCredential(cred);
   }



   //kan update hena  password kan aayt l  reauthenticate  o kan passi lih  currentPassword 
   //si ila kan sehih kanmshi l navig_account o kan affiche alert comme quoi rah sehih si 
   //non kan  affiche f current_pwd_error "The password is invalid"
   callFuctionPasswordReset = () => {
      console.log(" current_pwd :" + this.state.current_pwd);
      console.log(" new_pwd : " + this.state.new_pwd);
      this.reauthenticate(this.state.current_pwd).then(() => {
         var user = firebase.auth().currentUser;
         user.updatePassword(this.state.new_pwd).then(() => {
            console.log("Password updated!");
            this.props.navigation.navigate("navig_account")
            Alert.alert(
               'Success!',
               "Passaword updated successfully ! ",
               [

                  {
                     text: 'OK', onPress: () => {

                     }
                  },
               ]
            );
         }).catch((error) => {
            // console.log(" current_pwd_error error !"); 
            this.state.current_pwd_error = "The password is invalid"
            console.log(this.state.current_pwd_error)
         });
      }).catch((error) => {
         // console.log("new_pwd _error" );
         this.state.current_pwd_error = "The password is invalid"
         console.log(this.state.current_pwd_error + "     " + "current_pwd_error")
      });
      // console.log( this.state.current_pwd_error + "!:!:!:" )
      // if( this.state.current_pwd_error == null)  {console.log("succes up date password" );
      console.log("!!!!!! ");

      setTimeout(() => this.setState({ current_pwd_error: "The password is invalid" }), 3000);

   }





   //deja dertyha f sign up nafs l blan
   handleChangeText = (...args) => {


      switch (args[1]) {

         case 'current_pwd': {

            if (args[0] == "") this.setState({ current_pwd_error: "Please fill this field" })

            else this.setState({ current_pwd_error: null })
            // else { this.setState({ current_pwd_error: 'The new password must be 6 characters or more' }) }
            break;
         }


         case 'new_pwd': {
            if (args[0].length < 6) {
               if (args[0] == "") this.setState({ new_pwd_error: "Please fill this field" })

               else { this.setState({ new_pwd_error: 'The new password must be 6 characters or more' }) }
            } else {
               this.setState({ new_pwd_error: null })
               this.setState({ new_pwd: args[0] })
               if (args[0] == this.state.confirm_pwd) {
                  this.setState({ confirm_pwd_error: null })
               } else {
                  if (this.state.confirm_pwd != "")
                     this.setState({ confirm_pwd_error: 'The confirm password does not match' })
                  // else  this.setState({ confirm_pwd_error: "Please fill this field" })
               }
            }
            ; break;
         }

         case 'confirm_pwd': {
            if (args[0] == '') {
               this.setState({ confirm_pwd_error: "Please fill this field" })
               // console.log(this.state.error_msg_confim_pwd);
            } else {
               if (args[0] != this.state.new_pwd) {
                  this.setState({ confirm_pwd_error: 'The confirm password does not match' })

               } else {
                  this.setState({ confirm_pwd_error: null })
                  this.setState({ confirm_pwd: args[0] })
               }
            }; break;
         }

      }
   }


   //si maandi t erreur f new_pwd_error .. kan aayt l callFuctionPasswordReset
   handleResetPwd = () => {

      // console.log(" handleResetPwd!");
      const { new_pwd, current_pwd, confirm_pwd, loading
      } = this.state;
      this.setState({ is_click_confirm: true })

      if (current_pwd == "") this.state.current_pwd_error = 'Please fill this field'
      if (new_pwd == "") this.state.new_pwd_error = 'Please fill this field'
      if (confirm_pwd == "") this.state.confirm_pwd_error = 'Please fill this field'
      if (
         this.state.current_pwd_error == null
         && this.state.new_pwd_error == null
         && this.state.confirm_pwd_error == null
      ) {
         console.log(" Call function \"callFuctionPasswordReset\"");

         this.callFuctionPasswordReset()
      }

   }


   render() {
      const {
         current_pwd, new_pwd, confirm_pwd,
         loading, current_pwd_error, confirm_pwd_error, new_pwd_error, is_click_confirm } = this.state;

      return (
         <View style={styles.container}>

            {/* <Text style={{ left: 30, top: 40, fontSize: 30 }}>Update your password</Text> */}

            <View style={{ marginTop: 100 }}>

               <Text style={styles.etoilText}>*</Text>
               <TextInput
                  style={current_pwd_error != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                  value={current_pwd}
                  secureTextEntry
                  autoCapitalize="none"
                  placeholder="Current password"
                  onChangeText={current_pwd => {
                     this.setState({ current_pwd })
                     this.handleChangeText(current_pwd, 'current_pwd')
                  }} ></TextInput>



            </View>
            {current_pwd_error != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>
               {current_pwd_error}</Text>) : (<Text style={styles.errorTextStyle}>
               </Text>)}


            <View style={{ marginRight: 40, marginTop: 30 }}>
               {/* <Text style={styles.etoilText}>*</Text> */}
               <Text style={styles.etoilText}>*</Text>
               <TextInput
                  style={new_pwd_error != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                  value={new_pwd}
                  secureTextEntry
                  autoCapitalize="none"
                  placeholder="New password"
                  onChangeText={new_pwd => {
                     this.setState({ new_pwd })
                     this.handleChangeText(new_pwd, 'new_pwd')
                  }} ></TextInput>
            </View>
            {new_pwd_error != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>
               {new_pwd_error}</Text>) : ((<Text style={styles.errorTextStyle}>
               </Text>))}


            <View style={{ marginRight: 40, marginTop: 30 }}>
               <Text style={styles.etoilText}>*</Text>
               <TextInput
                  style={confirm_pwd_error != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                  value={confirm_pwd}
                  secureTextEntry
                  autoCapitalize="none"

                  placeholder="Confirm new password"
                  onChangeText={confirm_pwd => {
                     this.setState({ confirm_pwd })
                     this.handleChangeText(confirm_pwd, 'confirm_pwd')
                  }} ></TextInput>
            </View>
            {confirm_pwd_error != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>
               {confirm_pwd_error}</Text>) : ((<Text style={styles.errorTextStyle}>
               </Text>))}

            {/* Confirm button */}
            <View style={{ marginLeft: 10, top: 25, marginTop: 40 }}>
               <TouchableOpacity
                  onPress={() => {
                     this.handleResetPwd();
                  }}

                  style={styles.buttom1}>
                  <LinearGradient start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     locations={[0.0, 100]}
                     colors={['#8461c9', '#BD7AE3']}
                     style={styles.gradient}>
                     <Text style={{ color: "#fff" }}>Confirm</Text>

                  </LinearGradient>
               </TouchableOpacity>
               <View>

                  <TouchableOpacity
                     onPress={() => {
                        this.props.navigation.navigate("navig_account")
                     }}

                     style={{
                        left: 60, marginLeft: 60, fontSize: 18, color: "blue", top: 40
                     }}><Text>Back to tour profil </Text>
                     <View style={{ left: 1, borderBottomWidth: 1, borderColor: "blue", width: 115, marginLeft: -2, top: 5 }}></View>
                  </TouchableOpacity>
               </View>

            </View>

         </View>

      );
   }
}

const styles = StyleSheet.create({
   container: {
      // padding: 20,

      // justifyContent: 'center',
      // alignItems: 'center',
      flex: 1,
      backgroundColor: 'white',
   },
   inputErrorStyle: {
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#161F30',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'red',

      left: 25,
   },
   errorTextStyle: {
      color: "#E9446A",
      left: 37,
      marginTop: -10
   },
   etoilText: {
      top: 34,
      left: 309,
      color: "red"
   },
   buttom1: {
      // marginHorizontal: 30,
      // backgroundColor: "#8A8F9E",
      borderRadius: 4,
      height: 45,
      marginTop: 50, marginBottom: 10,
      alignItems: "center",
      justifyContent: "center",
      // top: 85,
   },
   gradient: {
      width: 230,
      height: 47,

      flex: 1,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 10
   },

   input: {
      // textTransform: "uppercase",
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#161F30',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#CFCFCF',

      left: 25,
   },
   gradient: {
      width: 230,
      height: 47,
      height: 52,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputErrorStyle: {
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#161F30',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'red',

      left: 25,
   },

});

