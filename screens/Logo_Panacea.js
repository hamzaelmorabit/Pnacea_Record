import React, { Component } from 'react';
import {
  StyleSheet,
  View,
   Image 
} from 'react-native';

export default class Logo_Panacea extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:240, height: 100}}
          			source={require('../images/logo1.png')}/>
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
   // //  flexGrow: 1,
   top : 20,
   // left : 60,
   

    justifyContent:'center',
    alignItems: 'center'
  },

});