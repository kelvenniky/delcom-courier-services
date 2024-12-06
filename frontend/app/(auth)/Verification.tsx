import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Verification = () => {
  const [code, setCode] = useState(["", "", "", ""]);

 

  return (
    <SafeAreaView>
      <View className="ml-10 mr-10 flex ">
        <TouchableOpacity onPress={() => router.replace('/(auth)/ForgotPassword')}>
          <View className="mt-20 flex items-center justify-center w-16 h-16 rounded-full bg-slate-700">
            <Entypo name="chevron-left" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex items-center mt-10 justify-center">
          <Text className="font-bold text-3xl">Verification</Text>
          <Text className="text-lg font-semibold text-gray-800">
            We have sent a code to your email
          </Text>
          <Text className="font-bold text-lg">example@gmail.com</Text>
        </View>

        <View className=" mt-10 mb-3 flex flex-row justify-between">
          <Text className=" ">CODE</Text>
          <View className="flex flex-row">
          <Text className="font-semibold border-b">Resend</Text>
          <Text> in.60sec</Text>
          </View>
        </View>
        
        <View className="  flex gap-2 flex-row justify-between">
          
          {code.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              placeholderTextColor="grey"
              className="w-20 h-20 text-center  text-2xl  font-bold rounded-lg bg-slate-300"
            />
          ))}
        </View>
        <TouchableOpacity onPress={() => router.replace('/(auth)/Welcome')} className="flex justify-center items-center mt-14 bg-slate-600 p-5 rounded-lg">
          <Text className="font-bold text-lg">VERIFY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({});