import * as Google from "expo-google-app-auth";
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Logo_Panacea from './Logo_Panacea';


export default class LogIn extends Component {

      constructor(props) {
         super(props);

      }

      //hado les variables li anhtaj 
      state   =  {

         email: '',//aykon l email dyalli
         password: '',//password dyali
         email_empty: false,//hena ila kan aandi true donc champ dyal email vide, kanbadel l color dyal l email
         password_empty: false,//same of above but concernning pwd
         erreur_email: '',//hena ila kan email format erreur 
         erreur_password: '',//hena ila kan email format erreur 
         erreur_empty_filds: '',//ila kan aandi les champs vide kandir hena l messag "please fill all mendatory fields" 
         //o kan affchih

        _user_email_connect_gmail : null ,
        error_msg_email:''

      }



   componentDidMount() {
      console.log("Login ...")
   }



   sign_in_with_gmail = async () => {
      try {
         const result = await Google.logInAsync({
            androidClientId:
               "238735614245-jdg35vclgpk2tioq710qdpq04ohhr969.apps.googleusercontent.com",
            scopes: ["profile", "email"],
         })

         if (result.type === "success") {
            this.setState({ error_msg_email: '' })
            this.setState({_user_email_connect_gmail : result.user.email})
            console.log('success connect with gmail')

            await firebase
            .auth()
            .createUserWithEmailAndPassword(this.state._user_email_connect_gmail,"default").catch((error)=>{
               this.setState({ error_msg_email: error.message })
               console.log("Error createUserWithEmailAndPassword!")
            });             
          } else {
            console.log("Cancelled!")
            this.setState({ error_msg_email: "Cancelled" })
         }
      } catch (error) {
         console.log("Error is :  ", error)
         this.setState({ error_msg_email: error.message })
    
      } 

      if (this.state.error_msg_email == '') {
         console.log("email of user : " +  this.state._user_email_connect_gmail)
         console.log("SignUpGmail good")
         this.props.navigation.navigate("SignUpGmail", {current_user : this.state._user_email_connect_gmail })
         
      }else{
         console.log("error_msg_email :"+this.state.error_msg_email)
         if( this.state.error_msg_email == "The email address is already in use by another account."){
            Alert.alert(
               '\'Google Account\' error',
               "The email address is already in use by another account. Try again",
               [ { text: 'Cancel', style: 'cancel', },
                  { text: 'OK', },]
            );
         }      
      }
   }

   handle_sign_in() {

      if (this.state.password != '' && this.state.email != '') {

         //hena rdythom  false bash nheyd dak color red aala les champs bkhoso erreur_empty_filds
         //on7yed text "please fill all mendatory fields"
         this.setState({ email_empty: false });
         this.setState({ erreur_empty_filds: '' });
         this.setState({ password_empty: false });
      //   try{
             firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            //  .
            //  then(  this.props.navigation.navigate("Loading"))
            .catch((error) => {

               //l'erreur dyal "password" password_empty kan redeha true bash  nerja3 dk champ dyal password 
               //color red 
               if (error.code == 'auth/wrong-password') {

                  this.setState({ password_empty: true });
                  error.code = 'Incoorect password. '
                  this.setState({ erreur_password: error.code });
                  this.setState({ erreur_email: '' });
               } else {

                  //l'erreur dyal "email" email_empty kan redeha true bash  nerja3 dk champ dyal email 
                  //color red 
                  if (error.code == 'auth/invalid-email') {
                     error.code = 'The email is badly formatted. '
                  } else {
                     error.code = 'User not found. try again '
                  }
                  this.setState({ email_empty: true });
                  this.setState({ erreur_email: error.code });
                  this.setState({ erreur_password: '' });
                  console.log("error.code")
               }

            });
            console.log(this.state.erreur_password)
            console.log(this.state.erreur_email)
            if( this.state.erreur_password  == '' && this.state.erreur_email  == '' )
                {console.log("all rught")
                
                firebase.auth().onAuthStateChanged(user => {
              
                  this.props.navigation.navigate(user ? "stack_home" : "stack_log_in")
               })}
      } else {

         //y9ed l user ydkhal y tconecta donc erreur_email or erreur_password man ba3ed maymesah o ydir sign in 
         // donc dak l messag dyal erreur_email or erreur_password ayb9a mais ana hena aykon aandi l erreur dyal 
         // une parmi les champs vide donc khasni nhayd had l (erreur_email or erreur_password )
         this.setState({ erreur_password: '' });
         this.setState({ erreur_email: '' });

         this.setState({ erreur_empty_filds: 'please fill all mendatory fields ' })

         if ((this.state.email) == "") {
            this.setState({ email_empty: true });
         }
         if ((this.state.password) == "") {
            this.setState({ password_empty: true });
         }
         if ((this.state.email) != "") {
            this.setState({ email_empty: false });
         }
         if ((this.state.password) != "") {
            this.setState({ password_empty: false });
         }

      }

   }


   render() {    

      //hena l'image dyal point d'itrrogation ! li atban ila kano aandi 1 men dak les champs empty
      //atban ila kan dak l erreur fih l messag (please fill all mendatory fields)
      const require_icon = require('../images/picturError.png');
      const icon = (this.state.erreur_empty_filds != '') ? require_icon : null;
   
      return (

         <View style={styles.container}>
          
            {/* dyal logo dertha f component akher bash man 3amrsh denya wakha 3emertha hh!!!  */}
            <Logo_Panacea />

            {/* hdi dertha aala hesab l affichage yjini dkshy bayn mzn ctt  */}
            <View style={styles.style_form}>
            </View>
            {/* {(this.state.email  != "") ? (<Text>GOOD</Text>) : (null)} */}
            {/* dak text li ana afficher men baad manbshy ndir login hyt y9ed ykon aandi email 
              f la formmat ola dak l user aslan mkaynshdert joj dyal les texts car n afficher l 
              email ila kan howa li ghalt si non l password */}
            <View>
               <Text style={styles.error_email_style}>
                  {this.state.erreur_email != "" && <Text>{this.state.erreur_email}</Text>}
               </Text>
               <Text style={styles.error_pwd_style}>
                  {this.state.erreur_password != "" && <Text>{this.state.erreur_password}</Text>}
               </Text>
            </View>

            {/* hena erreur dyal ila kan aandi shy champs vids */}
            <View >
               <Text style={styles.textErreur}> {this.state.erreur_empty_filds}</Text>
               <Image style={styles.ImageIconStyleError} source={icon} />
            </View>


            <View style={styles.form}>

               {/* text fin andkhl l email f style dert dak l condition hyt ila aandi erreur anbdl style dyal text
                  dk colorbottom aykon rouge */}
               <View >
                  <TextInput
                     style={this.state.email_empty ? styles.inputBoxPress : styles.inputBox}
                     placeholder="email"
                     autoCapitalize="none"
                     placeholderTextColor="#BBBBBB"
                     keyboardType="email-address"
                     // onSubmitEditing={() => this.password.focus()}
                     onChangeText={email => {
                        this.setState({ email });
                     }}

                  />

               </View>

               {/* meme gmail */}
               <View>
                  <TextInput
                     style={this.state.password_empty ? styles.inputBoxPress : styles.inputBox}
                     onChangeText={password => {
                        this.setState({ password });
                     }}
                     placeholder="password"
                     secureTextEntry={true}
                     placeholderTextColor="#BBBBBB"
                  // ref={(input) => this.password = input}
                  />
               </View>

               {/* ila l user werak aala forgot pws kan orientih l screen dyal "ForgotPassword" */}
               <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword")
               }}>
                  <Text style={{ left: 170 }}>Forgot the password ?</Text>
               </TouchableOpacity>

            </View>

            {/* hena ila pressa anmshy l method valider et dk LinearGradient hadik nta li golt li dirha aala hesab l color  */}
            <TouchableOpacity
               onPress={() => { this.handle_sign_in() }}
               style={styles.buttom}>

               <LinearGradient start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.0, 100]}
                  colors={['#8461c9', '#BD7AE3']}
                  style={styles.gradient}>
                  <Text style={{ color: "#fff" }}>sign in</Text>
               </LinearGradient>

            </TouchableOpacity>

            {/* same of "sign in" which in above ndwiw b englai hhhhhh  */}
            <TouchableOpacity onPress={()=>{this.sign_in_with_gmail()
            //  this.setState({ click : "true" });
            }} style={styles.buttom2}   >
               <LinearGradient start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.0, 100]}
                  colors={['#FF4360', '#FF647C']}
                  style={styles.gradient}>

                  <Text style={styles.buttonText1}> Sign in with Gmail </Text>
                  <Image
                     source={require('../images/gmailIcon1.png')}
                     style={styles.ImageIconStyle}
                  />
               </LinearGradient>
            </TouchableOpacity>


            {/* like others */}
            <View>
               <Text style={{ top: 150, 
               // top: 150, 
               top: 130, 
               left: 60 }}>you don't have an account  !?</Text>

               <TouchableOpacity onPress={() => { this.props.navigation.navigate("SignUp") }}
                  style={{ padding: 5,
                  //  top: 125,
                   top: 100, 
                    left: 245, fontWeight: "bold" }}
                  title="Sign up">

                  <Text style={{ fontWeight: "bold" }}>Sign Up</Text>

               </TouchableOpacity>
            </View>

         </View>
      );
   }
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      backgroundColor: 'white',

   },

   error_email_style: {
      left: 38,
      top: 105,
      color: 'red',
   },
   error_pwd_style: {
      left: 38,
      top: 140,
      color: 'red',
   },
   inputBoxPress: {
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#000000',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'red',
      marginTop: 15,
      left: 25,

   },
   textErreur: {
      position: 'absolute',
      fontSize: 14,
      color: '#FF4360',
      // fontFamily: 'System',
      // width: 153,
      // height: 18,
      left: 80,
      // top: 385,

      top: 190,

   }, ImageIconStyleError: {
      height: 25,
      width: 20,
      left: 275,
      // top: -22
      top: 187,
      bottom: 140,
   },

   buttonText1: {
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'left',
      justifyContent: 'center',
      paddingTop: 22
   },
   GooglePlusStyle: {
      width: 230,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ff4b67',
      borderRadius: 3,
      // top: 76.72,
      height: 47,
      top: 105,

   },
   ImageIconStyle: {
      height: 25,
      width: 29,
      left: -80,
      // top: -22
      top: -22,
   },
   gradient: {
      width: 230,
      height: 47,
      // height: 52,
      // flex: 1,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 5
   },
   buttonText: {
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'left',
      justifyContent: 'center',

   },

   inputBox: {
      // paddingRight : 15,
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#000000',
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#CFCFCF',
      left: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
   },
   greeting: {
      marginTop: 32,
      fontSize: 10,
      fontWeight: "400",
      textAlign: "center"
   },
   style_form: {
      height: 72,
      alignItems: "center",
      justifyContent: 'center',
      marginHorizontal: 30
   },

   error: {
      color: "#E9446A"
   },

   inputTitle: {
      color: "#8A8F9E",
      fontSize: 10,
      textTransform: "uppercase"
   },

   input: {
      borderBottomColor: "#8A8F9E",
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: "#161F30",

   },

   buttom: {
      borderRadius: 4,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      top: 85,
   },

   buttom2: {
      borderRadius: 4,
      height: 45,
      padding: 20,
      top: 105,
      alignItems: "center",
      justifyContent: "center",

   },





   header: {
      fontSize: 25
   },
   image: {
      marginTop: 15,
      width: 150,
      height: 150,
      borderColor: "rgba(0,0,0,0.2)",
      borderWidth: 3,
      borderRadius: 150
   }

});

































// const LoggedInPage = props => {
//          return (
//             <View style={styles.container}>
//                {/* <RegisterScreen /> */}
//                {/* <Text style={styles.header}>Welcome:{props.name}</Text>
//                <Image style={styles.image} source={{ uri: props.photoUrl }} /> */}

//             </View>
//          )
//       }

//       {   /* <LoginPage sign_in_with_gmail={this.sign_in_with_gmail}
//    /> */}
// {/* <View>
// {this.state.signedIn ? (
//   <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
// ) : (null)}
// </View> */}

{/* <MaterialIcons name='menu' size={28}  style={styles.icon} /> */ }
{/* <Text style={styles.greeting}>{`HomeScreen Hamzssa\nWelcom`}!</Text> */ }





               // Alert.alert('Login Failed ',
               //    //  'An error occurred while logging in to your account. Please try again later '
               //    error.code
               //    // + error.code
               //    , [
               //       { text: 'OK', onPress: () => console.log('alert closed') }
               //    ]);
               // //  }

               
        /*  signedIn: false,
         name: "",
         photoUrl: "",
         passwordGmail: "" */

          /*      this.setState({
                    signedIn: true,
                 name: result.user.name,
                   photoUrl: result.user.photoUrl,
                    passwordGmail: result.user.id
    
                 }) */
