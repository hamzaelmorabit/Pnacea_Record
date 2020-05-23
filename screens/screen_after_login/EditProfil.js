import { LinearGradient } from 'expo-linear-gradient';
import * as Google from "expo-google-app-auth";
import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import DataBasecomponent from './../DataBase/DataBaseComponent';
import { YellowBox } from 'react-native';
import test2_Base from './test2_Base';
YellowBox.ignoreWarnings(['Setting a timer']);

export default class EditProfil extends Component {


   constructor(props) {
      super(props);

   }


   state = {
      // loading: false,

      first_name: "",
      last_name: "",
      age: "",
      phone_number: "",
      checked: 'male',
      selectedValue: 'A+',

      first_name_error: null,
      last_name_error: null,
      error_msg_age: null,
      error_msg_phone: null,

      is_click_confirm: null,//lakherin bayenin hadi dertha hyt anbghy n afficher les erreurs façon dyanmique
      //mnin l user aydkhal ila mkontsh dayer hadi ay t aficha l messag leta7tf l code  atban mzn 


      _insert_data: null,//aala hesab l base donne
   }


   componentDidMount = async () => {


      console.log(" *** ComponentUnmount --- EditProfil ***** \n")
      console.log(this.state._insert_data)

      var user = firebase.auth().currentUser;

      if (user != null) {
         // const { email } = firebase.auth().currentUser;

         this.setState({ email: user.email });
         console.log("this.state.email" + user.email)


         this.setState({ yearsNow: new Date().getFullYear() });
      } else {
         console.log(" not user in Edit profil")

         ///this.props.navigation.navigate("stack_log_in")
      }


   }





   handleChangeText = (...args) => {


      switch (args[1]) {

         case 'first_name': {

            if (args[0] == '') {
               this.setState({ first_name_error: null })
               // console.log(this.state.error_msg_confim_pwd);
            } else {
               if (!(new RegExp(/^[a-zA-Z ]+$/).test(args[0]))) {
                  this.setState({ first_name_error: 'The first name is badly formatted' })

               } else {
                  this.setState({ first_name_error: null })
                  this.setState({ first_name: args[0] })
               }
            }; break;
         }

         case 'last_name': {
            if (args[0] == '') {
               this.setState({ last_name_error: null })
               // console.log(this.state.error_msg_confim_pwd);
            } else {
               if ((!new RegExp(/^[a-zA-Z ]+$/).test(args[0]))) {
                  this.setState({ last_name_error: 'The last name is badly formatted' })

               } else {
                  this.setState({ last_name_error: null })
                  this.setState({ last_name: args[0] })
               }
            }; break;
         }

         case 'age': {
            if (args[0] == '') {
               this.setState({ error_msg_age: null })

            } else {
               if (new RegExp(/^(([1]{1}[0-9]{0,2})|([1-9]{1}[0-9]{0,1}))$/).test(args[0])) {
                  this.setState({ error_msg_age: null })
                  // console.log('kkk ')
                  this.setState({ age: args[0] })
               } else {
                  this.setState({ error_msg_age: 'The age is badly formatted' })
               }
            }; break;
         }

         case 'phone': {
            //maroc
            if (new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(args[0])) {
               // ((0[0-9])[\-]([0-9]{2}[\-]){3}(([0-9]){2})){1}

               this.setState({ error_msg_phone: null })
               //si une seul verifier return true s-il depass 06-10..92 22 

            } else if (args[0] == '') {
               this.setState({ error_msg_phone: null })

            } else {
               this.setState({ error_msg_phone: "The phone number is badly formatted " })
            }; break;
         }

         default: { console.log('default'); break; }
      }
   }


   handl_confirm = async () => {
      //  this.props.navigation.navigate("stack_log_in")
      let { email, age, first_name, last_name, phone_number, selectedValue, checked
      } = this.state;
      this.setState({ is_click_confirm: true })


      if (
         this.state.first_name_error == null &&
         this.state.last_name_error == null
         && this.state.error_msg_age == null && this.state.error_msg_phone == null
      ) {
         this.setState({ loading: true })
         console.log("Valide form in Edit  ")


         setTimeout(() => {
            test2_Base.addUserEdit(email, first_name, last_name, phone_number
               , age, checked, selectedValue)
         }, 2000)

         setTimeout(() => {
            this.props.navigation.navigate("Home")
         }, 5000)
         /*   setTimeout(() => { 
             
        
    }
          , ) */

      } else {
         this.state._insert_data = null
      }

   }

   functionEcheck = () => {
      console.log("attent ...")
   }

   render() {

      const {
         // _delet_data,
         selectedValue, _insert_data, error_msg_age, checked, age, is_click_confirm, first_name_error, last_name_error,
         first_name, last_name, phone_number, email
         , error_msg_phone
      } = this.state;

      return (
         <View style={styles.container}>
            <Text style={styles.greeting}></Text>
            {/*  {(this.state.email != "") ? (<DataBasecomponent
               navigation={this.props.navigation} data={["get_dataEdit", email]} />) : (<Text>not executed</Text>
               )} */}
            {/* <Loader
               loading={this.state.loading} /> */}
            <ScrollView contentContainerStyle={styles.contentContainer}>



               {/* // First Name */}
               <View style={{ marginTop: 10 }}>
                  <Text style={styles.etoilText}>*</Text>
                  <TextInput
                     style={first_name_error != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                     value={first_name}
                     placeholder="First Name"
                     onChangeText={first_name => {
                        this.setState({ first_name })
                        this.handleChangeText(first_name, 'first_name')
                     }} ></TextInput>
               </View>
               {first_name_error != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>
                  {first_name_error}</Text>) : (<Text style={styles.errorTextStyle}></Text>)}


               {/* // last name */}
               <View style={{ marginTop: 10 }}>
                  {/* <Text style={styles.inputTitle}>Email Address </Text> */}
                  <Text style={styles.etoilText}>*</Text>
                  <TextInput
                     style={last_name_error != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                     // autoCapitalize="none"
                     placeholder="Last sName"
                     onChangeText={last_name => {
                        this.setState({ last_name })
                        this.handleChangeText(last_name, 'last_name')
                     }}
                     value={last_name}
                  ></TextInput>
               </View>
               {last_name_error != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>{last_name_error}</Text>) : (<Text style={styles.errorTextStyle}></Text>)}

               {/* // phone number */}
               <View style={{ marginTop: 10 }}>
                  <Text style={styles.etoilText}></Text>
                  {/* <Text style={styles.inputTitle}>Email Address </Text> */}
                  <TextInput
                     style={error_msg_phone != null && is_click_confirm ? styles.inputErrorStyle : styles.input}
                     keyboardType="numeric"
                     placeholder="Phone number"
                     onChangeText={(phone_number) => {
                        this.setState({ phone_number })
                        this.handleChangeText(phone_number, 'phone')
                     }}
                     // onChangeText={email => { this.setState({ email }) }}
                     value={phone_number}
                  ></TextInput>
               </View>
               {error_msg_phone != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>{error_msg_phone}</Text>) : (<Text style={styles.errorTextStyle}></Text>)}


               {/* // age  */}
               <View style={{ marginTop: 10 }}>
                  {/* <Text style={styles.inputTitle}>Password</Text> */}
                  <Text style={styles.etoilText}></Text>
                  <TextInput
                     style={error_msg_age != null && is_click_confirm ? styles.inputAgeError : styles.inputAge}
                     onChangeText={(age) => {
                        this.setState({ age })
                        this.handleChangeText(age, 'age')
                     }}
                     autoCapitalize="none"
                     placeholder="Age"
                     keyboardType="numeric"
                     // onChangeText={password => { this.setState({ password }) }}
                     value={age}
                  ></TextInput>

               </View>
               {error_msg_age != null && is_click_confirm ? (<Text style={styles.errorTextStyle}>{error_msg_age}</Text>) : (<Text style={styles.errorTextStyle}></Text>)}


               {/* // RadioButton */}
               <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30, flexDirection: 'row'
               }}>
                  <Text style={{ marginRight: 25 }}>Gender</Text>
                  <RadioButton
                     // style={{ backgroundColor: this.state.checked ? 'red' : 'white' }}
                     color="#6979F8"
                     style={{ color: "red" }}
                     // style={{ marginRight: 20 }}
                     value="male"
                     status={checked === 'male' ? 'checked' : 'unchecked'}
                     onPress={() => { this.setState({ checked: 'male' }); }}
                  />
                  <Text style={{ marginRight: 20 }}>Male</Text>
                  <RadioButton
                     color="#6979F8"
                     value="female"
                     status={checked === 'female' ? 'checked' : 'unchecked'}
                     onPress={() => { this.setState({ checked: 'female' }); }}
                  />
                  <Text style={{ marginRight: 40 }}>Female</Text>
               </View>


               {/* Picker */}
               <View style={{
                  justifyContent: 'center',
                  alignItems: 'center', marginTop: 30, flexDirection: 'row'
               }}>
                  <Text style={{ marginRight: 17 }}>Blood Type</Text>

                  <Picker
                     selectedValue={this.state.selectedValue}
                     style={{
                        // alignItems: "22",
                        height: 50,
                        marginRight: 93,
                        width: 95
                     }}
                     onValueChange={(itemValue) => { this.setState({ selectedValue: itemValue }) }}
                  >
                     <Picker.Item label="A+" value="A+" />
                     <Picker.Item label="B+" value="B+" />
                     <Picker.Item label="O+" value="O+" />
                     <Picker.Item label="AB+" value="AB+" />
                     <Picker.Item label="A-" value="A-" />
                     <Picker.Item label="B-" value="B-" />
                     <Picker.Item label="O-" value="O-" />
                     <Picker.Item label="AB-" value="AB-" />
                  </Picker>
               </View>



               {/* Confirm button */}
               <View style={{ marginTop: 10 }}>
                  <TouchableOpacity
                     onPress={() => { this.handl_confirm(); }}

                     style={styles.buttom1}>
                     <LinearGradient start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.0, 100]}
                        colors={['#8461c9', '#BD7AE3']}
                        style={styles.gradient}>
                        <Text style={{ color: "#fff" }}>Confirm</Text>

                     </LinearGradient>
                  </TouchableOpacity>
               </View>


            </ScrollView>


            {/* {si _insert_data deffranc de null kan ajouter f l base donn  dkshy kansyfto f data 
            li hya tableau o kandir f lawl dyaleha type wash l insert ola delet bash nlshy l component
            dyali n tchecki type bash naarf wash an inser ola an delet */}

            {/* {(_insert_data != null) ? (<DataBasecomponent
               data={["insert_dataEdit", email, "def", first_name, last_name, phone_number
                  , age, checked, selectedValue]} />) : (<Text></Text>)}   */}

            {/* {si l user deja kan kan supprimih men l base donn o kan passi ghyr gmail o howa
             f  kay9alb aalih b gmail  o kaysprimih} */}
            {/* {(_delet_data != null) ? (<DataBasecomponent data={["delet", email, password]} />) : (null)} */}

         </View>

      );

   }




}




const styles = StyleSheet.create({

   container: {
      alignItems: "center",
      flex: 1,
      backgroundColor: 'white'
   },
   errorChecked: {
      backgroundColor: 'rgba(0,0,0,0.6)',
   },
   contentContainer: {
      // padding: 20,

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

   etoilText: {
      top: 34,
      left: 309
   },

   greeting: {
      marginTop: 10,
      fontSize: 22,
      fontWeight: "400",
      textAlign: "center"
   },

   errorTextStyle: {
      color: "#E9446A",
      left: 37,
      marginTop: -10
   },

   errorMessage: {
      height: 72,
      alignItems: "center",
      justifyContent: 'center',
      marginHorizontal: 30
   },


   form: {
      marginBottom: 48,
      marginHorizontal: 30,
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
      alignItems: "center",
      // left: 25,
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
      alignItems: "center",
      // left: 25,
   },

   inputAge: {
      // textTransform: "uppercase",
      width: 90,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#161F30',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#CFCFCF',
      alignItems: "center",
      // left: 25,
   },

   inputAgeError: {
      // textTransform: "uppercase",
      width: 90,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#161F30',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'red',
      alignItems: "center",
      // left: 25,
   },

   buttom: {
      // marginHorizontal: 30,
      // backgroundColor: "#8A8F9E",
      borderRadius: 4,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      top: 85,
   },

});


