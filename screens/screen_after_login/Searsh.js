import React, { Component } from 'react';
import {
   StyleSheet,
   View,Text
} from 'react-native';

import Tab_bar from './../component/Tab_bar'

// import {Icon} from 'react-native-vector-icons/Ionicons';
export default class Searsh extends Component {

  



   render() {


      return (
         <View style={styles.container1}>
            <View>
               <Text>Searsh</Text>
            </View>
            
             <Tab_bar navigation={this.props.navigation}  line_width={-75 } name="searsh"/> 

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