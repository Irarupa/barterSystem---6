import React,{Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from '../screens/readStory';
import RequestBooks from '../screens/requestBook'

const AppTabNavigator = createBottomTabNavigator({
    ReadStory:{screen: ReadStory, navigationOptions:{
        /*  tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>, */
         tabBarLabel : "Read Story",}},
     RequestBooks:{screen: RequestBooks, navigationOptions:{
         /* tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>, */
       tabBarLabel : "Write Story",
     }} 
     
})