import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import AccountScreen from "../AccountScreen/AccountScreen";

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="AccountScreen" component={AccountScreen}/>
        </Tab.Navigator>
    )
}