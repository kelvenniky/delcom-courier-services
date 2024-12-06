import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <View className="ml-10 flex ">
       <TouchableOpacity onPress={()=>router.replace('/(auth)/SignIn')}>
       <View className="mt-20 flex items-center justify-center w-16 h-16 rounded-full bg-slate-700">
          <Entypo name="chevron-left" size={30} color="black" />
        </View>
       </TouchableOpacity>
        <View className="flex items-center  mt-10 justify-center">
          <Text className=" font-bold text-3xl">Forgot Password</Text>
          <Text className="text-lg font-semibold text-gray-800">
            Please sign in to your existing account
          </Text>
        </View>
        <View className=" mt-10 mr-10">
          <Text>EMAIL</Text>
<View>
    <TextInput placeholder="example@gmail.com" placeholderTextColor='grey' className="p-6 mt-4 rounded-lg bg-slate-300"/>
</View>
          <TouchableOpacity onPress={()=>router.replace('/(auth)/Verification')} className=" flex justify-center items-center mt-14 bg-slate-600 p-5 rounded-lg">
            <Text className="font-semibold text-lg">SEND CODE </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
