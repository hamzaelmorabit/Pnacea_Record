import React, { Component } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase'
export default class ForgotPassword extends Component {

   constructor() {
      super();

      global.errorReset = false;
      global.MessagError = '';
   }

   state = {
      email: "",
      errorResetForStyle: false,
      MessagErrorS: ''
   };

   passwordReset = async (email) => {
      await (firebase.auth().sendPasswordResetEmail(email))
         .catch(
            function (error) {
               // console.log('Error2');
               global.errorReset = true

               global.MessagError = error + '';
               // Alert.alert('Reset Password Failed ', error + ' Please try again lateddr   '
               //    , [ { text: 'OK',onPress: () => { }  }]);
            }
         )
   }


   handlePasswordReset = async () => {

      await this.passwordReset(this.state.email);
      if (global.errorReset) {
         // console.log('Error');
         this.setState({ errorResetForStyle: global.errorReset })
         console.log(global.MessagError)
         if (global.MessagError == ('Error: The email address is badly formatted.')) {
            this.setState({ MessagErrorS: "The email address is badly formatted" })
         } else {
            this.setState({ MessagErrorS: 'No user record corsponding to this identifier' })
         }


         global.errorReset = false;

      } else {
         console.log('go page acceuil ')
         this.setState({ errorResetForStyle: global.errorReset })
         this.setState({ MessagErrorS: '' })
         this.props.navigation.navigate("SendPasswordConfirm")
      }

   }


   render() {

      return (
         <View style={styles.container}>

            <View >
               <View >
                  <Text style={styles.MessagErrorStylr}>{this.state.MessagErrorS}</Text>
               </View>
               <View >
                  <Text style={{

                     marginLeft: 24,
                     marginRight: 24,
                     fontSize: 18,
                     textAlign: 'center',
                     fontSize: 15, bottom: 12
                  }}> Enter your email to receive a password reset link</Text>
                  <Image
                     source={require('../images/sendResetEmail1.png')}
                     style={styles.ImageIconStyle}
                  />
               </View>
               <TextInput

                  style={this.state.errorResetForStyle ? styles.inputBoxE : styles.inputBox}
                  name='email'
                  // value={values.email}
                  onChangeText={(gmail) => this.setState({ email: gmail })}
                  placeholder='email'
                  autoCapitalize='none'

               />


               <TouchableOpacity
                  onPress={() => {
                     this.handlePasswordReset()
                  }}
                  style={styles.buttom}>
                  <LinearGradient start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     locations={[0.0, 100]}
                     colors={['#8461c9', '#BD7AE3']}
                     style={styles.gradient}>
                     <Text style={{ color: "#fff" }}>Confirm</Text>
                     {/* <Text style={styles.buttonText}>Sign in</Text> */}
                  </LinearGradient>
               </TouchableOpacity>
            </View>
         </View>

      );
   }
}

const styles = StyleSheet.create({
   container: {
      // padding: 20,

      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
      // left: 5
   },
   gradient: {
      width: 230,
      height: 47,
      height: 52,
      // flex: 1,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 5
   },
   buttom: {
      // marginHorizontal: 30,
      // backgroundColor: "#8A8F9E",
      borderRadius: 4,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      top: 150,
   },
   ImageIconStyle: {
      height: 50,
      width: 70,
      // left: -80,
      // // top: -22
      bottom: 122, left: 142,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40
   },
   MessagErrorStylr: {
      color: 'red',
      // margin : 30,
      //margin: 24,
      // fontSize: 18,
      // // fontWeight: '',
      // textAlign: 'center',
      // backgroundColor: '#9C27B0',

      top: 130, left: 40,
   },
   inputBox: {
      width: 280,
      top: -51,
      borderBottomWidth: 1,
      borderBottomColor: '#CFCFCF',
      left: 40
   },
   inputBoxE: {
      top: -51,
      width: 280,
      borderBottomWidth: 1,
      borderBottomColor: 'red', left: 40
   },
   buttonTouch: {

      alignItems: "center",
      justifyContent: "center",
      top: 55,
   }
});
// import * as React from 'react';
// import {Picker ,Text,StyleSheet, View } from 'react-native';
// import {  RadioButton } from 'react-native-paper';

// export default class Frogot extends React.Component {
//   state = {
//     checked: 'first',
//     selectedValue:'',

//   };

//   render() {
//     let { checked} = this.state;

//     return (
//       <View style={styles.container}>
//         <Text>{checked}</Text>
//         <Text>{ this.state.selectedValue}</Text>
//         <Picker

//         style={{ height: 50, width: 85 }}
//         onValueChange={(itemValue) => { this.setState({ selectedValue :itemValue})}}
//       >
//         <Picker.Item label="A+" value="A" />
//         <Picker.Item label="B+" value="B" />
//       </Picker>
//         <RadioButton
//           value="first"
//           status={checked === 'first' ? 'checked' : 'unchecked'}
//           onPress={() => { this.setState({ checked: 'first' }); }}
//         />
//         <RadioButton
//           value="second"
//           status={checked === 'second' ? 'checked' : 'unchecked'}
//           onPress={() => { this.setState({ checked: 'second' }); }}
//         />
//       </View>
//     );
//   }

// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
// });























// import React, { Component, Fragment } from 'react'
// import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
// // import FormInput from '../components/FormInput'
// // import FormButton from '../components/FormButton'
// // import ErrorMessage from '../components/ErrorMessage'
// // import { withFirebaseHOC } from '../config/Firebase'

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .label('Email')
//     .email('Enter a valid email')
//     .required('Please enter a registered email')
// })

// class ForgotPassword extends Component {
//   handlePasswordReset = async (values, actions) => {
//     const { email } = values

//     try {
//       await this.props.firebase.passwordReset(email)
//       console.log('Password reset email sent successfully')
//       this.props.navigation.navigate('Login')
//     } catch (error) {
//       actions.setFieldError('general', error.message)
//     }
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.text}>Forgot Password?</Text>
//         <Formik
//           initialValues={{ email: '' }}
//           onSubmit={(values, actions) => {
//             this.handlePasswordReset(values, actions)
//           }}
//           validationSchema={validationSchema}>
//           {({
//             handleChange,
//             values,
//             handleSubmit,
//             errors,
//             isValid,
//             touched,
//             handleBlur,
//             isSubmitting
//           }) => (
//             <Fragment>
//               <TextInput
//                 name='email'
//                 value={values.email}
//                 onChangeText={handleChange('email')}
//                 placeholder='Enter email'
//                 autoCapitalize='none'
//                //  iconName='ios-mail'
//                 Color='#2C384A'
//                 onBlur={handleBlur('email')}
//               />
//               {/* <Text errorValue={touched.email && errors.email} /> */}
//               <View style={styles.errorMessage}>
//                {touched.email && errors.email && <Text >{this.state.errorValue}</Text>}
//             </View>
//               <Text>{errors.general}</Text>
//               <View style={styles.buttonContainer}>
//                 <Button
//                   buttonType='outline'
//                   onPress={handleSubmit}
//                   title='Send Email'
//                   Color='#039BE5'
//                   disabled={!isValid || isSubmitting}
//                 />
//               </View>
//               <Text>{errors.general}</Text>
//             </Fragment>
//           )}
//         </Formik>
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: 150
//   },
//   text: {
//     color: '#333',
//     fontSize: 24,
//     marginLeft: 25
//   },
//   buttonContainer: {
//     margin: 25
//   }
// })

// // export default withFirebaseHOC(ForgotPassword)
