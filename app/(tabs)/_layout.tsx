import { Tabs } from 'expo-router';
import { Palette, Home, Trophy, Settings, Upload } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6B9D',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFF8F0',
          borderTopWidth: 2,
          borderTopColor: '#FFE4E1',
          height: 85,
          paddingBottom: 15,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} strokeWidth={3} />
          ),
        }}
      />
      <Tabs.Screen
        name="coloring"
        options={{
          title: 'Color',
          tabBarIcon: ({ size, color }) => (
            <Palette size={size} color={color} strokeWidth={3} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Upload',
          tabBarIcon: ({ size, color }) => (
            <Upload size={size} color={color} strokeWidth={3} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Stars',
          tabBarIcon: ({ size, color }) => (
            <Trophy size={size} color={color} strokeWidth={3} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Settings size={size} color={color} strokeWidth={3} />
          ),
        }}
      />
    </Tabs>
  );
}