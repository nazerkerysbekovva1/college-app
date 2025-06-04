import { Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
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


export default function Bolim2() {

  const navigation = useNavigation<NavigationProp>();

    const { data, error, isLoading } = useQuery('gym_teachers', () => fetchData('/gym_teachers'));

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


  //   if (isLoading) {
  //   return (
  //     <SafeAreaView className="flex-1 justify-center items-center bg-white">
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </SafeAreaView>
  //   );
  // }

  // if (error || !data || !data.values) {
  //   return (
  //     <SafeAreaView className="flex-1 justify-center items-center bg-white">
  //       <Text>Қате орын алды немесе мәлімет табылмады</Text>
  //     </SafeAreaView>
  //   );
  // }

  // 🧮 Оқытушы статистикасын есептеу
  const totalCount = data?.values?.length || 0;

  const positionStats: { [key: string]: number } = {};
    if (data?.values) {
      data.values.forEach((teacher: any) => {
        let pos = teacher.position?.trim();

        // null немесе бос мәнді түсінікті етіп ауыстыру
        if (!pos || pos.toLowerCase() === 'null') {
          pos = 'Педагогикалық дәреже берілмеген';
        }

        // Ұқсас атауларды біріктіру (мысалы, қосымша бос орындармен немесе тіркестегі нүктелермен жазылғандар)
        if (pos === 'Педагог/ Магистр' || pos === 'Педагог - Магистр') {
          pos = 'Педагог-Магистр';
        }
        if (pos === 'Педагог-сарапшы/ Магистр') {
          pos = 'Педагог-сарапшы/Магистр';
        }
        if (pos === 'Педагог-модератор/ Магистр') {
          pos = 'Педагог-модератор/Магистр';
        }
        if (pos === 'Педагог зерттеуші' || pos === 'Педагог-зерттеуші') {
          pos = 'Педагог-зерттеуші';
        }

        // Статистиканы қосу
        if (pos in positionStats) {
          positionStats[pos]++;
        } else {
          positionStats[pos] = 1;
        }
      });
    }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 gap-4 bg-white'>
        

        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Есенкулова Айнур Оналбековна',
              'Гуманитарлық пәндер бөлімшесінің меңгерушісі',
              require('./../../../assets/images/teachers/ainur.jpeg'),
              'eaynur@mail.ru',
              'eaynur',
              ' ',
              [
                '1977 жылы 1 қазанда Түркістан қаласында дүниеге келіп, 1994 жылы С.Қожанов атындағы  жалпы орта мектебін аяқтап, 1996-2000 жылдар аралығында  Түркістан қаласындағы ХҚТУ нің Ағылшын тілі мен әдебиеті мамандығын алды.',
                'Санаты: Сарапшы -педагог',
                ''
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/ainur.jpeg')} 
              style={{ width: 115, height: 135, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Есенкулова Айнур Оналбековна</Text>
            <Text className='text-sm text-black'>Гуманитарлық пәндер бөлімшесінің меңгерушісі</Text>
          </View>
        </TouchableOpacity>   

          <View>
            <Text className="text-lg font-bold text-blue-800 mb-2">Бөлім мақсаттары мен міндеттері</Text>
            <Text className="text-sm text-gray-800 mb-2 text-justify">
              Колледждің әлемдік деңгейде бәсекеге қабілеттілігін қамтамасыз ете отырып,
              болашақ мамандардың рухани, интеллектуалды және физикалық мүмкіндіктерін ашуға жағдай жасау.
            </Text>
            <Text className="text-sm text-gray-800 text-justify">
              <Text className="font-bold text-blue-800">Бөлімшенің басты міндеттері</Text> – Мамандықтың үлгілік оқу жоспары, заманауи нарықтың талаптары,
              бәсекеге қабілетті маманның тұлғасының талаптарына сәйкес кәсіби даярлықты қамтамасыз етуге жағдайларды құру.
            </Text>
          </View>

          {/* Жалпы оқытушы саны */}
        <View className="bg-blue-100 p-4 rounded-xl mt-4">
          <Text className="text-base font-bold text-blue-800 mb-2">Оқытушылар саны: {totalCount}</Text>
          {Object.entries(positionStats).map(([position, count]) => (
            <Text key={position} className="text-sm text-gray-800">
              {position}: {count} оқытушы
            </Text>
          ))}
        </View>

        {/* {data.values.map((teacher: any, index: number) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
            onPress={() =>
              handlePress(
                teacher.teacher_name ,
                teacher.position,
                { uri: teacher.image }, // Егер image — url болса
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
        ))} */}

      </ScrollView>
    </SafeAreaView>
    
  );
}