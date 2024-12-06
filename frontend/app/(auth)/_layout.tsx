import React from 'react'
import { Stack } from 'expo-router'



const Layout = () => {
  return (
    
     <Stack>
        <Stack.Screen name='SignUp' options={{headerShown:false}} />
        <Stack.Screen name='Welcome' options={{headerShown:false}} />
        <Stack.Screen name='SignIn' options={{headerShown:false}} />
        <Stack.Screen name='ForgotPassword' options={{headerShown:false}} />
        <Stack.Screen name='Verification' options={{headerShown:false}} />
        <Stack.Screen name='Location' options={{headerShown:false}} />

     </Stack>
    
  )
}

export default Layout

