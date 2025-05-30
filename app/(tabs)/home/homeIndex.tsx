import {
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/kk';

type RootStackParamList = {
  Page: {
    title: string;
    date: string;
    description: string;
    image: ImageSourcePropType;
  };
  [key: string]: undefined | object;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'news'>;

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale('kk');

const weekDays = ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'];
const holidays = ['2025-06-01', '2025-07-06'];

export default function TabHomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const daysInMonth = endOfMonth.date();
  const firstDay = startOfMonth.day(); // Sunday = 0

  const adjustedFirstDay = (firstDay + 6) % 7; // Make Monday = 0
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: adjustedFirstDay }, () => null);

  const isHoliday = (date: string) => holidays.includes(date);
  const isToday = (day: number) =>
    today.date() === day && today.month() === startOfMonth.month();

  return (
    <SafeAreaView className="flex-1 bg-white pb-20">
      <ScrollView className="px-4 gap-4 bg-white">
        <View>
          <ImageBackground
            source={require('../../../assets/images/1.jpg')}
            resizeMode="cover"
            className="flex-1 justify-center items-center"
          >
            <View className="bg-black/40 px-4 py-2 w-full">
              <Text className="text-white text-5xl font-bold text-center">Student</Text>
              <Text className="text-white text-sm font-semibold text-center -mt-5">
                Білім, Еңбек, Даму, Қызмет ету
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Icons grid */}
        <View className="flex-row flex-wrap mt-10 justify-between">
          {[
            { page: 'news', label: "Жаңалықтар", icon: <Entypo name="news" size={30} color="#2563eb" /> },
            { page: 'history', label: "Колледж тарихы", icon: <FontAwesome5 name="university" size={30} color="#2563eb" /> },
            { page: 'worldskills', label: "WorldSkills", icon: <MaterialIcons name="emoji-events" size={30} color="#2563eb" /> },
            { page: 'specialties', label: "Мамандықтар", icon: <Ionicons name="briefcase-outline" size={30} color="#2563eb" /> },
            { page: 'teachers', label: "Оқытушылар", icon: <MaterialIcons name="people" size={30} color="#2563eb" /> },
            { page: 'news', label: "Үрдіс", icon: <FontAwesome5 name="chart-line" size={30} color="#2563eb" /> },
          ].map((item, idx) => (
            <TouchableOpacity
              key={idx}
              className="w-1/3 items-center mb-4"
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.page)}
            >
              <View className="bg-blue-200 p-4 rounded-full mb-1 shadow">
                {item.icon}
              </View>
              <Text className="text-blue-800 text-center text-sm">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Calendar */}
        <View className="px-4 bg-white rounded-xl shadow-md">
          <Text className="text-xl font-bold text-purple-800 mb-4">
            📅 {today.format('MMMM').charAt(0).toUpperCase() + today.format('MMMM YYYY').slice(1)}
          </Text>

          {/* Weekdays */}
          <View className="flex-row flex-wrap">
            {weekDays.map((d, i) => (
              <Text
                key={i}
                style={{
                  width: '14.28%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#4B5563',
                }}
              >
                {d}
              </Text>
            ))}
          </View>

          {/* Days */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {[...blanks, ...daysArray].map((day, idx) => {
              const fullDate = day
                ? dayjs(startOfMonth).date(day).format('YYYY-MM-DD')
                : null;
              const holiday = day && isHoliday(fullDate!);
              const current = day && isToday(day);
              const dayOfWeek = idx % 7;
              const isWeekend = dayOfWeek >= 5;

              return (
                <View
                  key={idx}
                  style={{
                    width: '14.28%',
                    height: 56,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRightWidth: (idx + 1) % 7 === 0 ? 0 : 0.5, // соңғы күн болмаса оң жақ шекара
                    borderBottomWidth: 0.5,
                    borderColor: '#d1d5db', // Tailwind: border-gray-300
                  }}
                >
                  {day ? (
                    <TouchableOpacity
                      style={[
                        {
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        current
                          ? { backgroundColor: '#2563EB' }
                          : holiday
                          ? { backgroundColor: '#FCD34D' }
                          : isWeekend
                          ? { backgroundColor: '#E5E7EB' }
                          : {},
                      ]}
                    >
                      <Text
                        style={{
                          color: current
                            ? 'white'
                            : holiday
                            ? '#B91C1C'
                            : isWeekend
                            ? '#374151'
                            : '#1F2937',
                          fontWeight: current || holiday ? 'bold' : 'normal',
                        }}
                      >
                        {day}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={{ width: 40, height: 40 }} />
                  )}
                </View>

              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
