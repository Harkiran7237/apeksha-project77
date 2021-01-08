import  React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }
    userLogin = (username, password)=>{
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(()=>{
          return alert("Successfully Login")
        })
        .catch((error)=> {
         
          return alert(error)
        })
      }
    
      userSignUp = (username, password) =>{
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
          return alert("User Added Successfully")
        })
        .catch(function(error) {
         
          return alert(error)
        });
      }
      render(){
        return(
          <View style={styles.container}>
            <View style={styles.profileContainer}>
            
            </View>
            <View style={styles.buttonContainer}>
             
              <View style={{alignItems:'center'}}>
                <TextInput
                style={styles.inputbox}
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    username: text
                  })
                }}
                />
              </View>
             
              <View style={{alignItems:'center'}}>
                <TextInput
                  style={styles.inputbox}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity
                  style={[styles.buttons,{marginBottom:10}]}
                  onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
                  >
                  <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
                  >
                  <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox:{
    height:50,
    width:300,
    border:"solid",
    borderWidth:3,
    //borderColor:"red",
},
buttons:{
    backgroundColor:"red",
    border:"solid",
    color:"white",
    margin:20,
    width:70,
    height:35,
}
});
