import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { router } from 'expo-router'
import Swiper from "react-native-swiper"
import { onboarding, } from '@/constants'

const Welcome = () => {
    const swiperRef = useRef<Swiper>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const isLastSlide = activeIndex === onboarding.length-1;
  return (
    <SafeAreaView className='flex h-full items-center justify-between  bg-white'>
        <View className=' mt-10 w-full bg-slate-600 h-96'></View>
        <Swiper ref={swiperRef}
        loop={false}
        dot={<View className="w-[12px] h-[12px] mx-2 bg-[#E2E8F0] rounded-full"/>}
        activeDot={<View className="w-[12px] h-[12px] mx-2 bg-slate-600 rounded-full"/>}
        onIndexChanged={(index)=>setActiveIndex(index)}
        >
            
               {onboarding.map((item) => (
               <View key={item.id} className='flex items-center justify-center  '>
                   
                    <View className='flex flex-row items-center justify-center w-full mt-10'>
                        <Text className='text-black text-3xl  font-bold mx-10 text-center'>{item.title}</Text>
                    </View>
                    <Text className='text-lg text-center font-semibold mt-1 text-[#858585] mx-10 '>{item.description}</Text>
               </View>
               ))} 
            
        </Swiper>
        <TouchableOpacity onPress={()=>isLastSlide ? router.replace('/(root)/(tabs)/Home')
            :swiperRef.current ?.scrollBy(1)} className=" flex justify-center w-96 items-center mt-28 bg-slate-600 p-5 rounded-lg">
              <Text className="font-semibold text-lg">{isLastSlide ?'GET STARTED':'NEXT'}</Text>
            </TouchableOpacity>

        

<TouchableOpacity onPress={()=>{
            router.replace('/(root)/(tabs)/Home')
        }} className='w-full flex justify-center items-center p-5'>
            <Text className='text-slate-700 text-lg font-bold'>Skip</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({})