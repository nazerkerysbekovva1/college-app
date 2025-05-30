import { ScrollView, Image, TouchableOpacity, ImageSourcePropType, Text, View,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Page: {
    title: string;
    date: string;
    description: string;
    image: ImageSourcePropType;
  };
  [key: string]: undefined | object;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'page'>;

export default function TabNewsScreen() {

  const navigation = useNavigation<NavigationProp>(); // Используем типизированную навигацию

  const handlePress = (title: string, date: string, description: string, image: ImageSourcePropType) => {
    // Переход на Page с передачей данных
    navigation.navigate('page', {
      title,
      date,
      description,
      image,
    });
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 gap-4 bg-white'>

      <TouchableOpacity 
          className="flex rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white" // Увеличил тень и сделал её более заметной
          onPress={() => handlePress(
            'АЛАШ ҚАЙРАТКЕРІ БЕЙІМБЕТ МАЙЛИННІҢ ТУҒАНЫНА 130 ЖЫЛ',
            '22.11.2024',
            'Қараша айының 15-і күні кітапханашы М.Жумадуллаеваның ұйымдастыруымен кітапханада Б.Майлиннің туғанына 130 жыл толуына орай әдеби шығармаларды экрандау печа – куча өтті.',
            require('../../../assets/images/f1.jpg')
          )}
        >
          <Image 
            source={require('../../../assets/images/f1.jpg')} 
            style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }}
          />
          <Text className="text-xl font-bold text-dark-blue">АЛАШ ҚАЙРАТКЕРІ БЕЙІМБЕТ МАЙЛИННІҢ ТУҒАНЫНА 130 ЖЫЛ</Text>
          <Text className='text-sm text-black font-bold'>22.11.2024</Text>
          <Text className='text-sm text-black'>Қараша айының 15-і күні кітапханашы М.Жумадуллаеваның ұйымдастыруымен кітапханада Б.Майлиннің туғанына 130 жыл толуына орай әдеби шығармаларды экрандау печа – куча өтті.</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    
  );
}
