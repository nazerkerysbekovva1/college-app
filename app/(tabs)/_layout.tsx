import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { Config } from '@/constants/Colors';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#FFFFFF',
          borderRadius: 50,
          position: 'absolute', // Бұрыштардың көрінуі үшін позиция қажет
          left: 10,             // Қажет болса табты экранның шетіне тым жабыспау үшін
          right: 10,
          bottom: 10,
          elevation: 8,         // Android көлеңкесін сақтау үшін
          shadowColor: '#000',  // IOS көлеңкесі үшін
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          marginHorizontal: 15
        },
      }}
    >
      {/* Tab 1 */}
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true, 
          headerTitle: () => (
            <View className='flex-row items-center'>
              <Image source={require('../../assets/images/icon-c2.jpg')} className='w-10 h-9 mr-2'/>
              <Text className='text-blue-900' style={{ fontSize: 13, paddingTop: 5 }}>
                «Түркістан Ахмет Ясауи» кәсіби колледжі
              </Text>
            </View>
          ),
          tabBarIcon: ({ color }) => <Ionicons name="newspaper-outline" color={color} size={25} />, 
          tabBarLabel: 'Басты', 
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color='white'
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      {/* Tab 2 */}
      <Tabs.Screen
        name="info"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="school-outline" color={color} size={25} />,
          tabBarLabel: 'Студент', 
        }}
      />

      {/* Tab 3 */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#2563eb',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: -21,
              }}
            >
               <Ionicons name="chatbubble-ellipses-outline" color={'#fff'} size={28} />
            </View>
          ), 
          tabBarLabel: '', 
        }}
      />

      {/* Tab 4 */}
      <Tabs.Screen
        name="teachers"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" color={color} size={25} />,
          tabBarLabel: 'Оқытушылар', 
        }}
      />

      {/* Tab 5 - Specialty */}
      <Tabs.Screen
        name="specialties"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="book-outline" color={color} size={25} />, 
          tabBarLabel: 'Мамандықтар', 
        }}
      />
    </Tabs>
  );
}
