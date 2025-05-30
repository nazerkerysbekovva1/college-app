import { Text, View,ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchData } from '@/data/api';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

type RootStackParamList = {
  Page: {
    name: string;
    position: string;
    image: any;
    email: string;
    facebook: string;
    instagram: string;
    achievements: string[];
  };
  [key: string]: undefined | object;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Page'>;


export default function Bolim1() {

  const navigation = useNavigation<NavigationProp>();

    const { data, error, isLoading } = useQuery('etb_teachers', () => fetchData('/etb_teachers'));

  const handlePress = (
    name: string,
    position: string,
    image: any,
    email: string,
    facebook: string,
    instagram: string,
    achievements: string[]
  ) => {
    navigation.navigate('page', {
      name,
      position,
      image,
      email,
      facebook,
      instagram,
      achievements,
    });
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error || !data || !data.values) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text>Қате орын алды немесе мәлімет табылмады</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 gap-4 bg-white'>
        
        {data.values.map((teacher: any, index: number) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
            onPress={() =>
              handlePress(
                teacher.teacher_name ,
                teacher.position,
                { uri: teacher.image || '' }, // Егер image — url болса
                teacher.email,
                teacher.facebook,
                teacher.instagram,
                teacher.achievements || []
              )
            }
          >
            <View className="items-center mr-2">
              <Image
                source={{ uri: teacher.image }}
                style={{ width: 115, height: 115, borderRadius: 2 }}
              />
            </View>
            <View className="flex-1 justify-center">
              <Text className="text-base font-bold text-dark-blue mb-2">{teacher.teacher_name}</Text>
              <Text className="text-sm text-black">{teacher.position} санатты оқытушы</Text>
            </View>
          </TouchableOpacity>
        ))}
        

      </ScrollView>
    </SafeAreaView>
    
  );
}