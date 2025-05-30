import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

export default function Worldskills() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white pb-20'>
      <ScrollView className='px-4'>

        <View className="flex-row items-center justify-center">
          <Image
            source={require('../../../assets/images/worldskills/logo.png')}
            style={{ width: 200, height: 150, resizeMode: 'contain', marginTop: -20 }}
          />
        </View>

        {/* Бөлім: WorldSkills Kazakhstan */}
        <View>
          
          <Text className='text-base text-gray-800 text-justify mb-2'>
            WorldSkills Kazakhstan — жастар арасында жұмысшы мамандықтардың беделін арттыру және кәсіби шеберлікті дамыту мақсатында өткізілетін ұлттық чемпионат. Қазақстан 2014 жылдан бастап WorldSkills International ұйымының мүшесі болып табылады.
          </Text>
          <Text className='text-base text-gray-800 text-justify mb-2'>
            2024 жылы Астанада өткен IX Республикалық чемпионатқа 500-ден астам колледж студенті қатысты. Олар 30 түрлі құзыреттілік бойынша бақ сынасты, оның ішінде: дәнекерлеу, құрылыс, веб-технологиялар, электроника, аспаздық және т.б.
          </Text>
          <View className="bg-blue-50 border border-blue-300 rounded-md px-3 py-2 mb-2">
            <Text className='text-sm text-gray-800'>
              • 2025 жыл Қазақстанда «Жұмысшы мамандықтар жылы» деп жарияланды. Бұл бастама техникалық және кәсіптік білім беру сапасын арттыруға бағытталған.{"\n"}
              • Жеңімпаздар халықаралық деңгейдегі EuroSkills және WorldSkills чемпионаттарына қатысу мүмкіндігіне ие болады.
            </Text>
          </View>
        </View>

        {/* Бөлім: WorldSkills Turkistan */}
        <View>
          <Text className='text-xl font-semibold text-green-700 mb-2'>
            🌍 WorldSkills Turkistan
          </Text>
          <Text className='text-base text-gray-800 text-justify mb-2'>
            WorldSkills Turkistan — Түркістан облысында өткізілетін аймақтық кәсіби шеберлік чемпионаты.
          </Text>
          <View className="bg-green-50 border border-green-300 rounded-md px-3 py-2 mb-2">
            <Text className='text-sm text-gray-800'>
              • 2022 жылы облыстық чемпионатқа 38 колледжден 294 қатысушы 59 құзыреттілік бойынша қатысты.{"\n"}
              • 2023 жылы облыстық кезеңде 214 студент 33 құзыреттілік бойынша бақ сынады.{"\n"}
              • 2024 жылы ерекше білім беру қажеттіліктері бар жастарға арналған «WorldSkills Abilympics Turkistan» чемпионаты ұйымдастырылды.
            </Text>
          </View>
        </View>

        {/* Суреттер бөлімі */}
        <Text className='text-lg font-bold text-gray-800 mb-2'>📸 Суреттер галереясы</Text>
        <ScrollView horizontal className="mb-6">
          {[
            require('../../../assets/images/worldskills/2024-25/1.jpeg'),
            require('../../../assets/images/worldskills/2024-25/2.jpeg'),
            require('../../../assets/images/worldskills/2024-25/3.jpeg'),
            require('../../../assets/images/worldskills/2024-25/4.jpeg'),
            require('../../../assets/images/worldskills/2024-25/5.jpeg'),
            require('../../../assets/images/worldskills/2024-25/6.jpeg'),
            require('../../../assets/images/worldskills/2024-25/7.jpeg'),
            require('../../../assets/images/worldskills/2024-25/8.jpeg'),
            require('../../../assets/images/worldskills/2024-25/9.jpeg'),
            require('../../../assets/images/worldskills/2024-25/10.jpeg'),
          ].map((img, index) => (
            <Image
              key={index}
              source={img}
              style={{ width: 220, height: 140, borderRadius: 10, marginRight: 10 }}
            />
          ))}
        </ScrollView>

        {/* Видео бөлімі (қаласаңыз қосуға болады) */}
        <View className="rounded-lg overflow-hidden mb-10">
          <Video
            source={require('../../../assets/videos/25-college.mp4')}
            style={{ width: '100%', height: 200 }}
            resizeMode="cover"
            useNativeControls
            shouldPlay
            isLooping
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
