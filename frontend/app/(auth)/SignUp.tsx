import { Button, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Platform } from 'react-native';
import { router } from 'expo-router';

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-white"> 
      <KeyboardAvoidingView  
        className="flex-1" 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100} 
      >
        <View className=" flex-1 justify-center"> 
          <Image 
            source={require('../../assets/logo.png')} 
            className="w-48 h-48 "
          />
          <View className="mx-9"> 
            <Text className="mt-5 font-bold text-2xl ">Sign Up</Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor="black"
              style={{fontSize:16}}

              className="border-b mt-5 w-full p-5 mb-4 text-lg" // Use NativeWind for styling
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              style={{fontSize:16}}

              className="border-b mt-5 w-full p-5 mb-4 text-lg" // Use NativeWind for styling
            />
            <TextInput
              placeholder="Create Password"
              placeholderTextColor="black"
              style={{fontSize:16}}

              className="border-b mt-5 w-full p-5 mb-4 text-lg" // Use NativeWind for styling
            />
            <TouchableOpacity onPress={()=>router.replace('/(auth)/SignIn')} className=' flex justify-center items-center mt-5 bg-slate-600 p-4 rounded-lg'>
                <Text className='font-semibold text-lg'>Sign Up</Text>
            </TouchableOpacity>
          <View className=' mt-5 flex justify-center items-center'>
          <Text className='text-gray-600 font-semibold text-lg'>By Signing up you agree to our</Text>
          <Text className='text-gray-600 font-semibold text-lg'>Terms & Privacy Policy</Text>
          </View>
          <Text className='mt-5 flex text-center text-gray-600 font-semibold text-lg'>or</Text>

            <View className=' mt-5 flex justify-center items-center flex-row gap-5'>
                <TouchableOpacity onPress={()=>router.replace('/(root)/(tabs)/Home')} className=' flex flex-row  gap-2 py-4 rounded-xl px-8 bg-blue-50'>
                <Image 
            source={require('../../assets/google.png')} 
            className="w-6 h-6 "
          />
                    <Text className=' font-semibold text-gray-700 text-lg'>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className=' flex flex-row  items-center justify-center gap-1 py-2 rounded-xl px-6 bg-blue-50'>
                <Image 
            source={require('../../assets/facebook1.png')} 
            className="w-10 h-10 "
          />
                    <Text className=' font-semibold text-gray-700 text-lg'>Facebook</Text>
                </TouchableOpacity>
            </View>

           <TouchableOpacity onPress={()=>router.replace('/(auth)/SignIn')}>
           <View className=' mt-5 flex justify-center items-center flex-row gap-1'>
                <Text className=' font-semibold text-lg text-gray-600'>Already have an account?</Text>
                <Text className='font-semibold text-lg text-blue-600'>Sign In</Text>
            </View>
           </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignUp;

const styles = StyleSheet.create({});