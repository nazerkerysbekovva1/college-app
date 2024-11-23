import { ScrollView, Image, TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Config } from '@/constants/Colors';
import Bolim1 from './bolim1';
import Bolim2 from './bolim2';
import Bolim3 from './bolim3';
import Akimshilik from './akimshilik';

const Tab = createMaterialTopTabNavigator();

export default function TabTeachersScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <Tab.Navigator
        initialRouteName="ЕТБ"
        screenOptions={{
          tabBarActiveTintColor: Config.customBlue,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBarStyle,
          tabBarIndicatorStyle: { backgroundColor: 'black', height: 1.0 },
          tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' }, 
        }}
      >
        <Tab.Screen name="ЕТБ" component={Bolim1} />
        <Tab.Screen name="Аграрлық" component={Bolim2} />
        <Tab.Screen name="Гуманитария" component={Bolim3} />
        <Tab.Screen name="Басшылық" component={Akimshilik} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: '100%',
    height: 43,
    // backgroundColor: '#ccf5ff',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.4,
  },
});
