

import * as firebase from 'firebase'

const test2_Base = {

   state: {
      name: "sss",
      r: "mmm",
      email: '',

      userForgmail: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: '',
      Gendre: '',
      blood_type: '',
      id: '',
      path: ''
   },



   removeUser: function (para_path) {
      // console.log(para_path)
      this.state.path = para_path
      firebase.database().ref(para_path).remove();
   },

   // countUser: function () {
   //    var numbre_of_user = 0;
   //    // return [this.state.name , this.state.r];
   //    firebase.database().ref('users').on('value', data => {
   //       data.forEach((item) => {
   //          numbre_of_user  = numbre_of_user + 1;
   //          console.log("hello :" +numbre_of_user )
   //       })

   //    });
   //    return numbre_of_user;
   // },

   is_Update: function (param1, param2, param3, param4, param5, param6) {
      if (param1 != "") {
         this.state.firstName = param1
         console.log(this.state.firstName)
      }
      // else{
      //    this.state.firstName = ""
      // }
      if (param2 != "") {
         this.state.lastName = param2
      }
      if (param3 != "") {
         this.state.phoneNumber = param3
      }
      if (param4 != "") {
         this.state.age = param4
      }
      if (param5 != "") {
         this.state.gendre = param5
      }
      if (param6 != "") {
         this.state.bloodType = param6
      }

   },


   addUserEdit: function (param0, param1, param2, param3
      , param4, param5, param6) {

      let data_user = this.getDataOfUSer(param0)
      // console.log(data_user)
      this.is_Update(param1, param2, param3
         , param4, param5, param6)
      var path1 = "users/user_" + this.state.id

      this.removeUser("users/user_" + this.state.id)

      console.log('INSERTED Update add User!');

      setTimeout(() => {
         firebase.database().ref(path1).set({
            email: param0,
            userForgmail: this.state.userForgmail,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            phoneNumber: this.state.phoneNumber,
            gendre: this.state.gendre,
            bloodType: this.state.bloodType,
            id: this.state.id,
            // id_;
         }
         ).then(() => {

         }).catch((error) => {
            console.log(error);
         });
         return;
      }, 2000);

   },

   getDataOfUSer: function (param0) {
      // console.log( this.props.data + " : data ")
      // window.location.reload(false);
      // const {firstName} = this.state ; 
      //  console.log(this.props.data)
      // this.setState({ data: 'kkkkkkkkk' }) 
      // return [this.state.name , this.state.r];
      firebase.database().ref('users').on('value', data => {
         data.forEach((item) => {

            if (item.val().email == param0) {
               console.log(item.val().email + " : item.val().email")
               console.log(param0 + " : param0")
               console.log(item.val().id + " The id  of element i found ")
               this.state.email = item.val().email
               this.state.userForgmail = item.val().userForgmail
               this.state.firstName = item.val().firstName
               this.state.lastName = item.val().lastName
               this.state.phoneNumber = item.val().phoneNumber
               this.state.age = item.val().age
               this.state.Gendre = item.val().gendre
               this.state.blood_type = item.val().bloodType
               this.state.id = item.val().id
               return;
            }
         })



         // console.log( this.state.password + "$$$")

      })
      return [this.state.firstName, this.state.lastName,
      this.state.phoneNumber, this.state.age,
      this.state.Gendre, this.state.blood_type,

      ];

   },


   helper2: function (param1, param2) {
      console.log(param1)
   }
}
export default test2_Base
