import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Chat1() {

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 pt-4 gap-4 bg-white'>
      <Text className="text-lg font-bold">Welcome to Chat 1</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
