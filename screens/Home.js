import React, { Component } from 'react';
import {
   StyleSheet,
   Text, Button,
   View, Image, StatusBar, LayoutAnimation,
   TouchableOpacity
} from 'react-native';
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
         // this.setState({ email :fname})
      }


      // console.log(firebase.auth().currentUser)
      // this.props.navigation.navigate("my_account")

   }

   // componentWillUnmount = () => {
   //    // const { navigation } = this.props;
   //    // const fname = navigation.getParam('user_')
   //    // // console.log(firebase.auth() + "firebase.auth().currentUser.email")

   //    // console.log(fname +" $$$$ ")
   //    var user = firebase.auth().currentUser;
   //    if (user != null) {
   //       const { email } = firebase.auth().currentUser;

   //       this.setState({ email });}
   //       else{
   //          // this.setState({ email :fname})
   //       }


   //    // console.log(firebase.auth().currentUser)
   //    // this.props.navigation.navigate("my_account")

   // }




   render() {


      const { email } = this.state;
      // LayoutAnimation.easeInEaseOut();
      console.log(email)
      return (
         <View style={styles.container1}>
            {/* <DataBasecomponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
            {/* <DataBaseComponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
            <Text>{this.state.email}</Text>
            <TouchableOpacity onPress={() => {
               this.signOutUser()
            }} >
             <Text style={{ alignItems: 'center', top: 40, fontSize: 30 }}>Welcom Home Page</Text>
           

            </TouchableOpacity>
            <View style={{top:-40}}>
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
});

// bottom: {
//    flex: 1,
//    justifyContent: 'flex-end',
//    marginBottom: 36
//  }

{/* <Image style={styles.image} source={{ uri: props.photoUrl }} /> */ }