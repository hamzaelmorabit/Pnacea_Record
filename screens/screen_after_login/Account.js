import React, { Component } from 'react';
import {
   StyleSheet, TouchableOpacity,
   View, Text, Alert
} from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import Tab_bar from './../component/Tab_bar'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import DataBasecomponent from '../DataBase/DataBaseComponent'


export default class Account extends Component {
   constructor(props) {
      super(props);

   }
   state = {
      email: "",
      // photoUrl: "",
      yearsNow: ""
   };



   //kanshof wash m connect b gmail or not si ila kan affiche lih alert (mazal aad khasni na7aydeha )
   //si non kandih l ResetGmail
   resetHandle = () => {
      const { navigation } = this.props;
      // const fname = navigation.getParam('current_user')
      // console.log(fname + " fname:::::")
      const user_connect_with_gmail = navigation.getParam('userForgmail')
      console.log(user_connect_with_gmail)
      if (user_connect_with_gmail == 'true') {
         Alert.alert(
            'Impossible!',
            "Impossible you are currently sign in with gmail ! ",
            [
               {
                  text: 'OK', onPress: () => {

                  }
               },
            ]
         );
      }
      else {
         this.props.navigation.navigate("navig_ResetPassword")
      }
   }


   //hadi bayena 
   signOut = () => { firebase.auth().signOut() }

   //kan nakhed l user l eandi halin o kanhato f email 
   //ila maandish kanreja3 l login ()
   componentDidMount = () => {
      console.log("componentDidMount of Account")
      var user = firebase.auth().currentUser;

      if (user != null) {
         // const { email } = firebase.auth().currentUser;

         this.setState({ email: user.email });
         console.log("this.state.email" + user.email)


         this.setState({ yearsNow: new Date().getFullYear() });
      } else {
         this.props.navigation.navigate("stack_log_in")
      }

   }



   render() {

      const { navigation } = this.props;
      const firstName = navigation.getParam('firstName')
      const lastName = navigation.getParam('lastName')
      const phoneNumber = navigation.getParam('phoneNumber')
      const age = navigation.getParam('age')
      const id = navigation.getParam('id')
      const gendre = navigation.getParam('gendre')
      const blood_type = navigation.getParam('blood_type')


      const { email } = this.state
      return (


         <View style={styles.container1}>

            {/* <Text>{email}Email !!</Text> */}

            {/* kanaayt l base donne bash nakhed les info dyal user si ila kan aandi l user (email != null)*/}
            {(this.state.email != "") ? (<DataBasecomponent
               navigation={this.props.navigation} data={["get_data", email]} />) : (<Text>not executed</Text>
               )}

            <View style={{ bottom: 90 }}>
               <TouchableOpacity style={styles.buttom2}
                  onPress={() => {
                     console.log('navig_EditProfil  ')
                     //this.props.navigation.navigate("navig_EditProfil")
                  }}

               >
                  <LinearGradient start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     locations={[0.0, 100]}
                     colors={['#8461c9', '#BD7AE3']}
                     style={styles.gradient}>
                     <MaterialIcons
                        style={{ right: 80, top: 10 }}
                        name="edit"
                        color='white'
                        size={30}
                     />
                     <Text style={{ top: -15, color: 'white' }}>Edit  profile </Text>
                  </LinearGradient>

               </TouchableOpacity>

            </View>
            <View style={{ top: 60, }}>
               <View style={{ top: 30, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>First Name    </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 40 }}>
                     {firstName}

                  </Text>
               </View>
               <View style={{ top: 60, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>Last Name    </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 40 }}>
                     {lastName}
                  </Text>
               </View>
               <View style={{ top: 90, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>Phone  </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 77 }}>
                     {phoneNumber}
                  </Text>
               </View>
               <View style={{ top: 120, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>Birthday  </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 65 }}>January 1,
                   {this.state.yearsNow}
                     {/* {new Date().toLocaleString()} */}
                  </Text>
               </View>
               <View style={{ top: 150, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>Gendre  </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 71 }}>
                     {gendre}
                  </Text>
               </View>
               <View style={{ top: 180, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 39 }}>Blood Type </Text>
                  <Text style={{ fontSize: 17, color: "#3F3356", fontFamily: 'Roboto', marginLeft: 50 }}>
                     {blood_type}
                  </Text>
               </View>
            </View>

            <View style={{ bottom: 60, paddingRight: 11, paddingLeft: 2, flexDirection: 'row' }}>
               <TouchableOpacity style={styles.buttom22}

                  onPress={() => {

                     this.resetHandle()
                  }
                  } >
                  <LinearGradient start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     locations={[0.0, 100]}
                     colors={['#8461c9', '#BD7AE3']}
                     style={styles.gradient2}>
                     <MaterialCommunityIcons
                        style={{ left: -57, right: 60, top: 10 }}
                        name="lock-reset"
                        color='white'
                        size={30}
                     />
                     <Text style={{ fontSize: 13, top: -15, color: 'white' }}>        Reset Password </Text>
                  </LinearGradient>

               </TouchableOpacity>
               <View>
                  <TouchableOpacity style={styles.buttom23}


                     onPress={() => {
                        this.signOut()
                     }} >

                     <Text style={{ fontSize: 13, color: '#BD7AE3' }}>Sign  out </Text>
                     {/* </LinearGradient> */}

                  </TouchableOpacity>
               </View>
            </View>

            <View style={{ bottom: 207 }}>


               {/* Tab_bar had l component howa dak TabBar li le7at ->  katkhalini ndir naviguatin bin les  screen 
             name :  bash n colorer text o icon si ila kont mnaviguer aalihom
             line_position : position dyal dk line li leta7t 
             navigation : hya li katkhalini ndir navigation 
            */}

               <Tab_bar

                  navigation={this.props.navigation} line_position={145} name="account" />
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

   gradient: {
      width: 200,
      height: 47,
      // height: 52,
      // flex: 1,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',

      // borderRadius: 5
   },
   gradient2: {
      width: 150,
      height: 47,
      // height: 52,
      // flex: 1,*bor
      // borderColor:'#fff' ,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',

      // borderRadius: 5
   },
   ImageIconStyle: {
      height: 25,
      width: 29,
      left: -80,
      // top: -22
      // top: -22,
   },
   buttom2: {
      // flexDirection:"row",
      borderRadius: 4,
      height: 45,
      padding: 20,
      top: 120,
      // top: 10,
      alignItems: "center",
      justifyContent: "center",
   },
   buttom22: {
      // flexDirection:"row",
      paddingLeft: 10,
      borderRadius: 4,
      height: 45,
      // padding: 20,
      top: 360,
      // top: 10,
      alignItems: "center",
      justifyContent: "center",
   },

   buttom23: {
      // flexDirection:"row",
      marginLeft: 10,
      borderRadius: 3,
      height: 45,
      // padding: 20,
      top: 360,
      // top: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: '#BD7AE3',

      width: 150,
      height: 47,
   },



});

























