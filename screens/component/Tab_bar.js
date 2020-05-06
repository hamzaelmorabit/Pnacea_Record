import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, Icon, Entypo, MaterialIcons, FontAwesome, EvilIcons, SimpleLineIcons } from '@expo/vector-icons'

// import { LinearTextGradient } from "react-native-text-gradient";
// import { GradientText } from 'react-native-text-gradient';


export default class Tab_bar extends Component {

   constructor(){
      super();
      global.current_user = "falsccce";
   }
   // state = {
   //    global.current_user: "",
    

   // };
   
   // componentDidMount = () => {
   //    this.setState({ current_user:this.props.current_user})
   // }
   render() {
      // console.log(this.props.name)
      // const { navigation } = this.props;
      // this.state.last_press = navigation.getParam('user');
      return (

         <View style={styles.container}>

            <View
               style={{
                  top: 72,
                  borderBottomWidth: 1,
                  borderBottomColor: '#E5E5E5',
                  width: 400,
               }} />

            <View style={{
               top: 80,
               justifyContent: 'flex-start',
               flexDirection: 'row'
            }}>
               <View style={{ top: -2, width: 70, paddingLeft: 10, height: 50 }}>
                  <TouchableOpacity >
                     <FontAwesome
                        // SimpleLineIcons
                        style={{ width: 60, height: 50 }}
                        name="home"
                        color={(this.props.name == 'home') ? '#8461c9' : '#000000'}
                        size={35}
                        onPress={() => {
                           this.setState({ position_gradient: this.props.line_width })
                           this.props.navigation.navigate("Home")
                        }} />
                  </TouchableOpacity>
               </View>


               <View style={{ paddingLeft: 10, width: 70, height: 90 }}>
                  <TouchableOpacity>
                     <Ionicons
                        // EvilIcons
                        style={{ width: 200, height: 70 }}
                        name="md-search"
                        // search
                        color={this.props.name == 'searsh' ? '#8461c9' : '#3F3356'}
                        size={30}
                        onPress={() => {
                           this.props.navigation.navigate("navig_searsh")
                        }}
                     />
                  </TouchableOpacity>

               </View>


               <View style={{ width: 70, paddingLeft: 5, height: 90 }}>
                  <TouchableOpacity >
                     <MaterialIcons
                        // EvilIcons
                        style={{ width: 100, height: 55 }}
                        name="location-on"
                        // location-on

                        color={this.props.name == 'maps' ? '#8461c9' : '#3F3356'}
                        size={35}
                        onPress={() => {
                           this.props.navigation.navigate("navig_maps")
                        }} />
                  </TouchableOpacity>
               </View>


               <View style={{ paddingLeft: 13, width: 70, height: 90 }}>
                  <TouchableOpacity >

                     <Entypo
                        // Ionicons
                        // Entypo
                        style={{ width: 100, height: 55 }}
                        name="notification"
                        // name="ios-notifications-outline"
                        color={this.props.name == 'notifications' ? '#8461c9' : '#3F3356'}
                        size={35}
                        // backgroundColor="#fff"
                        onPress={() => {
                           this.props.navigation.navigate("navig_notifactions")
                        }} />
                  </TouchableOpacity>
               </View>


               <View style={{ paddingLeft: 15, width: 70 }}>
                  <TouchableOpacity >
                     <Feather
                        style={true ? styles.home_style : null}
                        name="user"
                        color={this.props.name == 'account' ? '#8461c9' : '#3F3356'}
                        size={35}
                        onPress={() => {
                           this.props.navigation.navigate("navig_account",{current_user : this.props.current_user})
                        }} />
                  </TouchableOpacity>
               </View>
            </View>

            <View style={{ top: 24, flexDirection: "row" }}>
               <Text style={this.props.name == 'home' ? { color: "#8461c9", paddingRight: -39 } : { paddingLeft: -39 }}>
                  Home</Text>
               <Text style={this.props.name == 'searsh' ? { color: "#8461c9", paddingLeft: 31 } : { paddingLeft: 31 }}>
                  Searsh</Text>
               <Text style={this.props.name == 'maps' ? { color: "#8461c9", paddingLeft: 27 } : { paddingLeft: 27 }}>
                  Maps</Text>
               <Text style={this.props.name == 'notifications' ? { color: "#8461c9", paddingLeft: 18 } : { paddingLeft: 18 }}>
                  Notifications</Text>
               <Text style={this.props.name == 'account' ? { color: "#8461c9", paddingLeft: 11 } : { paddingLeft: 11 }}>
                  Account</Text>
            </View>

            <View style={{ top: 30, flexDirection: "row" }}>

               <View style={{ left: this.props.line_width }}>
                  <LinearGradient start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     locations={[0.0, 100]}
                     colors={['#8461c9', '#BD7AE3']}
                     style={{
                        width: 80 + 0,
                        // this.state.width_position_gradient,
                        height: 10,
                     }}>

                  </LinearGradient>
               </View>
               {/* 
               <View>
                  <Text style={true ? styles.text_style2 : null}>
                  </Text>
               </View> */}

            </View>
         </View>

      )
   }
}

const styles = StyleSheet.create({
   container: {
       flexBasis:1,// 
    
      top: 465,
      // justifyContent: 'flex-end',

      // backgroundColor: '#fff',
      alignItems: 'center',

   },

   home_style: {
      width: 100, height: 55,

      backgroundColor: "white"
   },
   myTabBar: {
      // alignItems: 'stretch',
      // justifyContent: 'flex-end',
      flex: 1,
      alignItems: 'center',
      flexDirection: "row",

      // top:300
   }

});





// {/* <LinearTextGradient
//                   style={{ fontWeight: 'bold', fontSize: 72 }}
//                   locations={[0, 1]}
//                   colors={['red', 'blue']}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                >
//                  <Text> THIS IS TEXT GRADIENT</Text>
//                </LinearTextGradient>  */}

//                constructor() {
//                   super();

//                   this.state = {
//                      // position_gradient: -140,
//                      // width_position_gradient: 0,
//                      selectedTab: "",
//                      press_home: false,
//                      press_searsh: false,
//                      press_location: false,
//                      press_notification: false,
//                      press_user: false,
//                      last_press: "",
//                      first_time: false,
//                   }




//                }

//                // componentDidMount= () => {
//                //    // this.state.first_time = true
//                //    const { navigation } = this.props;
//                //    // this.state.first_time = navigation.getParam('user');
//                //    console.log(navigation.getParam('user'))
//                //    // this.setState({ first_time : false });
//                //    // this.props.navigation.navigate("my_account")

//                // }



//                signOutUsennn = (type_press) => {
//                   // this.props.navigation.navigate("my_account")

//                   if (type_press != "press_home") {
//                      this.state.press_home = false;
//                      // console.log("helll")
//                   }
//                   if (type_press != "press_searsh") {
//                      this.state.press_searsh = false;
//                   }
//                   if (type_press != "press_location") {
//                      this.state.press_location = false;
//                   }
//                   if (type_press != "press_notification") {
//                      this.state.press_notification = false;
//                   }
//                   if (type_press != "press_user") {
//                      this.state.press_user = false;
//                   }
//                   // setTimeout(() => {


//                   //    // 
//                   // }, 4000);


//                }

// render (
// const music_icon = (  
//    <Icon name="music" size={60} color="#fb3742" onPress={()=>{Alert.alert("Music Icon Clicked")}} />  
//   );  

// return (  
//   <View style={styles.MainContainer}>  
//       <TouchableOpacity>  
//         {facebook_button}  
//      </TouchableOpacity>  