import React from 'react';
import { Text, View,TextInput , StyleSheet, TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from "firebase"
import db from "../config"
import MyHeader from '../components/MyHeader'

export default class RequestBooks extends React.Component{
    constructor(){
        super()
        this.state={
            bookName:'',
         reasonToRequest:'',
         userId:firebase.auth().currentUser.email
        }
    }

    render(){
        return(
            <View>
               
                <MyHeader title="Request Books" navigation ={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput 
                     style ={styles.formTextInput}
                    placeholder="Enter Book Name"
                    onChangeText={(text)=>{
                        this.setState({bookName: text})
                    }}
                    value={this.state.bookName}
                    />
                    <TextInput
                     style ={[styles.formTextInput, {height:300}]}
                    placeholder="Enter Reason For request"
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({reasonToRequest: text})
                    }}
                    value={this.state.reasonToRequest}
                    />
                    <TouchableOpacity
                     style={styles.button}
                     onPress={()=>{
                         this.addRequest(this.state.bookName,this.state.reasonToRequest)
                     }}
                     >
                      <Text>Request</Text>  
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },


})