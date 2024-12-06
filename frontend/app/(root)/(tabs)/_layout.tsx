import {
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Tabs } from "expo-router";
  import { MaterialIcons } from '@expo/vector-icons';
  import Feather from '@expo/vector-icons/Feather';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import Octicons from '@expo/vector-icons/Octicons';

  
  const Layout = () => {
    return (
      <Tabs
        screenOptions={{
        headerShown:false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "white",

            display: 'flex',
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            overflow: "hidden",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: () => (
            <Feather name="home" size={24} color="black" />            ),
          }}
        />
        <Tabs.Screen
          name="Orders"
          options={{
            title: "Orders",
            headerShown: false,
            tabBarIcon: () => (
            <Feather name="shopping-bag" size={24} color="black" />             ),
          }}
        />
        <Tabs.Screen
          name="Notification"
          options={{
            title: "Notification",
        
            headerShown: false,
            tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: () => (
            <Octicons name="person" size={24} color="black" />            ),
          }}
        />
      </Tabs>
    );
  };
  
  export default Layout;