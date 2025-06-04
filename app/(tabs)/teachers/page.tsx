import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation  } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

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
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Page'>;

export default function Page() {
  const navigation = useNavigation();

  const route = useRoute<DetailScreenRouteProp>(); // Используем useRoute для получения параметров
  const { name, position, image, email, facebook, instagram, achievements } = route.params;

  const handleLinkPress = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Не удается открыть URL: " + url);
      }
    });
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>

        <View className='p-4 items-center flex-row gap-4'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={15} color="black" />
            </TouchableOpacity> 
          <Text className='text-sm text-black'>Назад</Text>
        </View>
        
      <ScrollView className='p-4 gap-4'>
        
        <View className='items-center'>
          <Image
              source={image}
              style={{ width: 360, height: 300, borderRadius: 2 }}
            />
        </View>

        <Text className="text-xl font-bold text-dark-blue">{name}</Text>
        <Text className='text-base text-black'>{position}</Text>

        {/* Контактная информация */}
        <View className='gap-1'>
          <TouchableOpacity className='flex-row items-center' onPress={() => handleLinkPress(`mailto:${email}`)}>
            <FontAwesome name="envelope" size={20} color="black" style={{ marginRight: 10 }} />
            <Text>{email}</Text>
          </TouchableOpacity>
          {facebook && facebook.trim() !== '' && (
          <TouchableOpacity className='flex-row items-center' onPress={() => handleLinkPress(`https://www.facebook.com/${facebook}`)}>
            <FontAwesome name="facebook" size={20} color="black" style={{ marginRight: 10 }} />
            <Text>{facebook}</Text>
          </TouchableOpacity>
          )}
          {instagram && instagram.trim() !== '' && (
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => handleLinkPress(`https://www.instagram.com/${instagram}`)}
          >
            <FontAwesome name="instagram" size={20} color="black" style={{ marginRight: 10 }} />
            <Text>{instagram}</Text>
          </TouchableOpacity>
        )}
        </View>
        

        {/* Достижения */}
        <Text className="text-xl font-bold text-black">Достижения:</Text>
        <View className='flex w-80 justify-center mb-10 pb-20'>
          {achievements.map((achievement, index) => (
            <View key={index} className='flex-row mb-1'>
              <FontAwesome name="minus" size={20} color="black" style={{ marginRight: 10 }} />
              <Text>{achievement}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
