import React, { Component } from 'react';
import {
   StyleSheet,
   Text, Button,
   View, Image, StatusBar, LayoutAnimation,
   TouchableOpacity
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import * as firebase from 'firebase'
import Tab_bar from './component/Tab_bar'
import DataBaseComponent from './DataBase/DataBaseComponent'
// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class Home extends Component {
   constructor() {
      super();
      this.state = {
         email: "",
         photoUrl: "",

      };
   }


   signOutUser = () => {
      this.props.navigation.navigate("stack_log_in")
      firebase.auth().signOut()
   }

   signOutUsennn = () => {
      console.log('hello')
      // this.props.navigation.navigate("my_account")
   }

   componentDidMount = () => {
      // const { navigation } = this.props;
      // const fname = navigation.getParam('user_')
      // // console.log(firebase.auth() + "firebase.auth().currentUser.email")
      console.log("home ....")
      // console.log(fname +" $$$$ ")
      var user = firebase.auth().currentUser;
      if (user != null) {
         // const { email } = firebase.auth().currentser;

         this.setState({ email: user.email });
      }
      else {
         console.log("user not found in home 'null'.")

         // this.props.navigation.navigate("stack_log_in")

         // this.setState({ email :fname})
      }


   }


   pressHandler = (type_pres) => {
      switch (type_pres) {
         case "medecal_records":
            console.log("press" + type_pres)
            break;
         case "medical_precedent":
            console.log("press" + type_pres)
            break;
         case "familial_precedents":
            console.log("press" + type_pres)
            break;
         case "appointments":
            console.log("press" + type_pres)
            break;
         case "joined_account":
            console.log("press" + type_pres)
            break;
         case "insurance":
            console.log("press" + type_pres)
            break;

         default:
            break;
      }
   }
   render() {


      const { email } = this.state;
      // LayoutAnimation.easeInEaseOut();
      console.log(email)
      return (
         <View style={styles.container1}>
            {/* <MaterialCommunityIcons name="folder-multiple" size={24} color="#3F3356" /> */}
            {/* <DataBasecomponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
            {/* <DataBaseComponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
            <Text>
               {/* {this.state.email} */}
            </Text>
            {/* <TouchableOpacity onPress={() => {
               this.signOutUser()
            }} >
             <Text style={{ alignItems: 'center', top: 40, fontSize: 30 }}>Welcom Home Page</Text>
           

            </TouchableOpacity> */}
            <View  style={{
                    left:-10}}>
               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("medecal_records")}>

                  <Text style={{
                     elevation: 0,
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>

                  <MaterialCommunityIcons

                     style={{
                        elevation: 0,
                        position: "absolute",
                        right: 270, top: 14
                     }}
                     name="folder-multiple" size={30}
                     color="#3F3356" />
                  <Text style={{
                     elevation: 0,
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Medical records</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     elevation: 0,
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("medical_precedent")}>

                  <Text style={{
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>
                  <FontAwesome5

                     style={{
                        position: "absolute",
                        right: 272, top: 16
                     }}
                     name="user-alt" size={25}
                     color="#3F3356" />
                  <Text style={{
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Medical precedents</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("familial_precedents")}>

                  <Text style={{
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>
                  <MaterialCommunityIcons
                     style={{
                        position: "absolute",
                        right: 268, top: 15
                     }}
                     name="account-multiple" size={32}
                     color="#3F3356" />
                  <Text style={{
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Familial precedents</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("appointments")}>

                  <Text style={{
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>
                  <Ionicons

                     style={{
                        position: "absolute",
                        right: 272, top: 14
                     }}
                     name="md-time" size={32}
                     color="#3F3356" />
                  <Text style={{
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Appointments</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("joined_account")}>

                  <Text style={{
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>
                  <MaterialCommunityIcons

                     style={{
                        position: "absolute",
                        right: 270, top: 14
                     }}
                     name="account-box" size={32}
                     color="#3F3356" />
                  <Text style={{
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Joined accounts</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.item} onPress={() => this.pressHandler("insurance")}>

                  <Text style={{
                     position: "absolute",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#F0F0F0", width: 59, height: 57,
                     right: 255, top: 2.3, borderRadius: 3
                  }}></Text>
                  <MaterialCommunityIcons

                     style={{
                        position: "absolute",
                        right: 270, top: 15
                     }}
                     name="shield" size={30}
                     color="#3F3356" />
                  <Text style={{
                     color: "#3F3356",
                     fontSize: 15,
                     left: 60, bottom: 8
                  }}>Insurance</Text>
                  <Ionicons
                     style={{
                        left: 60, bottom: 2
                     }}
                     name="ios-time" size={18} color="#D0C9D6" />
                  <Text style={{
                     color: "#D0C9D6",
                     fontSize: 11,
                     left: 80, bottom: 19
                  }}>March 1, 2013 1:08 PM</Text>
               </TouchableOpacity>
            </View>
            <View style={{ top: -480 }}>



               <Tab_bar name="home"
                  current_user={email}

                  line_position={-140}
                  navigation={this.props.navigation}

               />
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
   item: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      // shadowRadius: 3.84,

      elevation: 0.5,


      padding: 16,
      marginTop: 16,
      borderColor: '#F3F3F3',
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 1,
      borderRadius: 10,
      // backgroundColor: "#FFFFFF",
      height: 64,
      width: 320
   }
});


/* Rectangle 19 */

// position: absolute;
// width: 59px;
// height: 57px;
// left: 24px;
// top: 75px;

// background: #F0F0F0;
// border-radius: 3px;

// <svg width="59" height="57" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="59" height="57" rx="3" fill="#F0F0F0"/>
// </svg>


{/* <Image style={styles.image} source={{ uri: props.photoUrl }} /> */ }