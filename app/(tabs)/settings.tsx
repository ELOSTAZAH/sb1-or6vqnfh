import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, Volume2, VolumeX, Palette, Shield, Heart, Info, FileText, Mail } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const router = useRouter();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  const handleLicensePress = () => {
    router.push('/license');
  };

  const handleContactPress = () => {
    Alert.alert(
      '📧 Contact Us',
      'For support or questions, please email us at:\n\nsupport@colorandlearn.app\n\nWe love hearing from our amazing artists!',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleAboutPress = () => {
    Alert.alert(
      '🎨 About Color & Learn',
      'Color & Learn is a free, open-source coloring app designed specifically for autistic children and their families.\n\nOur mission is to provide a calm, educational, and joyful coloring experience that helps children learn while having fun.\n\nVersion 1.0.0',
      [{ text: 'Wonderful!', style: 'default' }]
    );
  };

  const settingsGroups = [
    {
      title: 'Audio & Sound 🔊',
      items: [
        {
          id: 'sound',
          title: 'Sound Effects',
          description: 'Play sounds when coloring',
          type: 'switch',
          value: soundEnabled,
          onValueChange: setSoundEnabled,
          icon: soundEnabled ? Volume2 : VolumeX,
        },
        {
          id: 'music',
          title: 'Background Music',
          description: 'Calm nature sounds while coloring',
          type: 'switch',
          value: musicEnabled,
          onValueChange: setMusicEnabled,
          icon: Volume2,
        },
      ],
    },
    {
      title: 'Experience 🎨',
      items: [
        {
          id: 'vibration',
          title: 'Gentle Vibration',
          description: 'Soft feedback when completing areas',
          type: 'switch',
          value: vibrationEnabled,
          onValueChange: setVibrationEnabled,
          icon: Heart,
        },
      ],
    },
    {
      title: 'Information ℹ️',
      items: [
        {
          id: 'about',
          title: 'About This App',
          description: 'Learn more about Color & Learn',
          type: 'button',
          onPress: handleAboutPress,
          icon: Info,
        },
        {
          id: 'license',
          title: 'License & Copyright',
          description: 'View app license and terms',
          type: 'button',
          onPress: handleLicensePress,
          icon: Shield,
        },
        {
          id: 'contact',
          title: 'Contact Support',
          description: 'Get help or share feedback',
          type: 'button',
          onPress: handleContactPress,
          icon: Mail,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE4E1', '#FFF0F5', '#F0F8FF']}
        style={styles.background}
      />

      <LinearGradient
        colors={['#FF6B9D', '#C44569']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>⚙️ Settings</Text>
          <Text style={styles.headerSubtitle}>
            Make the app perfect for you! ✨
          </Text>
          <View style={styles.iconContainer}>
            <Settings size={32} color="white" strokeWidth={3} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Message */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Customize Your Experience! 🌟</Text>
          <Text style={styles.welcomeText}>
            Adjust these settings to make coloring even more fun and comfortable for you!
          </Text>
        </View>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            
            <View style={styles.groupContainer}>
              {group.items.map((item, itemIndex) => (
                <View key={item.id} style={[
                  styles.settingItem,
                  itemIndex === group.items.length - 1 && styles.lastItem
                ]}>
                  <View style={styles.settingLeft}>
                    <View style={styles.settingIcon}>
                      <item.icon size={24} color="#FF6B9D" strokeWidth={3} />
                    </View>
                    <View style={styles.settingInfo}>
                      <Text style={styles.settingTitle}>{item.title}</Text>
                      <Text style={styles.settingDescription}>{item.description}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.settingRight}>
                    {item.type === 'switch' ? (
                      <Switch
                        value={item.value}
                        onValueChange={item.onValueChange}
                        trackColor={{ false: '#E5E7EB', true: '#FF6B9D' }}
                        thumbColor={item.value ? '#FFFFFF' : '#F3F4F6'}
                        ios_backgroundColor="#E5E7EB"
                      />
                    ) : (
                      <TouchableOpacity
                        style={styles.settingButton}
                        onPress={item.onPress}>
                        <Text style={styles.settingButtonText}>View</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>🎨 Color & Learn</Text>
          <Text style={styles.appInfoText}>
            A free, open-source coloring app made with love for autistic children and their families.
          </Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0</Text>
          
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>What makes us special:</Text>
            <View style={styles.featuresList}>
              <Text style={styles.featureItem}>🔢 Numbered coloring guides</Text>
              <Text style={styles.featureItem}>🎵 Calming nature sounds</Text>
              <Text style={styles.featureItem}>⭐ Reward system with stars</Text>
              <Text style={styles.featureItem}>📁 Upload your own pictures</Text>
              <Text style={styles.featureItem}>🆓 Completely free forever</Text>
              <Text style={styles.featureItem}>❤️ Made for accessibility</Text>
            </View>
          </View>
        </View>

        {/* Open Source Notice */}
        <View style={styles.openSourceContainer}>
          <Text style={styles.openSourceTitle}>🌍 Open Source & Free</Text>
          <Text style={styles.openSourceText}>
            This app is completely free and open source. Families can modify, 
            share, and improve it together. No ads, no purchases, just pure coloring fun!
          </Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  iconContainer: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  welcomeContainer: {
    margin: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B9D',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },
  settingsGroup: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  groupContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  settingRight: {
    marginLeft: 16,
  },
  settingButton: {
    backgroundColor: '#FF6B9D',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  settingButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  appInfoContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  appInfoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B9D',
    textAlign: 'center',
    marginBottom: 12,
  },
  appInfoText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
    fontWeight: '500',
  },
  appInfoVersion: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  featuresContainer: {
    marginTop: 8,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },
  openSourceContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#10B981',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  openSourceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10B981',
    textAlign: 'center',
    marginBottom: 12,
  },
  openSourceText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 30,
  },
});