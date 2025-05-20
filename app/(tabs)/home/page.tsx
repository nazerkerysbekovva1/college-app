import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation  } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

type RootStackParamList = {
  Page: {
    title: string;
    date: string;
    description: string;
    image: any; 
  };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Page'>;

export default function Page() {
  const navigation = useNavigation();

  const route = useRoute<DetailScreenRouteProp>(); // Используем useRoute для получения параметров
  const { title, date, description, image } = route.params;

  return (
    <SafeAreaView className='flex-1 bg-white'>

        <View className='p-4 items-center flex-row gap-4'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={15} color="black" />
            </TouchableOpacity> 
          <Text className='text-sm text-black'>Назад</Text>
        </View>
        
      <ScrollView className='p-4 gap-4'>
        
        <Text className="text-xl font-bold text-dark-blue">{title}</Text>
        <View className='items-center'>
          <Image
              source={image}
              style={{ width: 360, height: 300, borderRadius: 10 }}
            />
        </View>
        
        <Text className='text-sm text-black'>{description}</Text>

        <Text className='text-sm text-black font-bold'>{date}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
