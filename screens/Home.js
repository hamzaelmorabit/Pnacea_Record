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

   state = {
      email: "",
      photoUrl: "",

   };
   signOutUser = () => {
      firebase.auth().signOut()
   }

   signOutUsennn = () => {
      console.log('hello')
      // this.props.navigation.navigate("my_account")
   }

   componentDidMount = () => {
      const { email, photoUrl } = firebase.auth().currentUser;
      
      this.setState({ email });
      console.log(firebase.auth().currentUser)
      // this.props.navigation.navigate("my_account")

   }




   render() {

    
      // const { navigate } = this.props.navigation;
      // LayoutAnimation.easeInEaseOut();
      return (
         <View  style={styles.container1}>
         {/* <DataBasecomponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
            {/* <DataBaseComponent
               data={["get_user_info", this.state.email]} navigation={this.props.navigation}
            /> */}
           <Text>{this.state.email}</Text>
                 <TouchableOpacity 
                      
                        onPress={() => {
                          
                           this.signOutUser()
                        }} >
                        <Text>{this.state.email}</Text>
                         
                  </TouchableOpacity>
            <Tab_bar name="home"  current_user={this.state.email}
             line_width={-140} 
               navigation={this.props.navigation}

             />
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