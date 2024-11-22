import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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


export default function TabTeachersScreen() {

  const navigation = useNavigation<NavigationProp>();

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


  return (
    <SafeAreaView className='flex bg-white'>
      <ScrollView className='px-4 py-4 gap-4 bg-white'>
        
        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Кенжалиев Алтынбек Тұрлыбиұлы',
              '"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры',
              require('../../../assets/images/teachers/director.jpg'),
              'yassaui_kolledj@mail.ru',
              'Алтынбек Кенжалиев',
              'altynbek.kenzhaliyev',
              [
                '2008 жылдан бүгінге дейін «ЖҚТУ-нің жергілікті кәсіподақ комитеті» қоғамдық бірлестігінің төрағасы',
                '2010 жылдан ЖҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжінің директоры қызметтерін атқарып келеді',
                'Қазақстан Республикасы Білім және Ғылым министрлігінің «Білім саласының құрметті қызметкері» және «Ы.Алтынсарин» төсбелгілерімен марапатталған',
                'Экономика ғылымдарының кандидаты',
                '2016 жылдан Түркістан қалалық мәслихатының депутаты',
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('../../../assets/images/teachers/director.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Кенжалиев Алтынбек Тұрлыбиұлы</Text>
            <Text className='text-sm text-black'>"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white">
          <View className='items-center mr-2'>
            <Image 
              source={require('../../../assets/images/teachers/director.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Кенжалиев Алтынбек Тұрлыбиұлы</Text>
            <Text className='text-sm text-black'>"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white">
          <View className='items-center mr-2'>
            <Image 
              source={require('../../../assets/images/teachers/director.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Кенжалиев Алтынбек Тұрлыбиұлы</Text>
            <Text className='text-sm text-black'>"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры</Text>
          </View>
        </TouchableOpacity>

        
        

      </ScrollView>
    </SafeAreaView>
    
  );
}
