import React, { Component } from 'react';
import {
   StyleSheet,
   View, Text
} from 'react-native';

import Tab_bar from './../component/Tab_bar'

// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class Searsh extends Component {





   render() {


      return (
         <View style={styles.container1}>



            <View>

               <Text style={{  alignItems: 'center', top: 40, fontSize: 30 }}>search Page</Text>
            </View>
            <View style={{ top: -20 }}>

               <Tab_bar navigation={this.props.navigation} line_position={-75} name="searsh" />
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