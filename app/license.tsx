import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Shield, Lock, Clock as Unlock, Save, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';

export default function LicenseScreen() {
  const router = useRouter();
  const [isLocked, setIsLocked] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLockLicense = () => {
    if (!ownerName.trim() || !ownerId.trim() || !ownerEmail.trim() || !password.trim()) {
      Alert.alert(
        'Missing Information',
        'Please fill in all fields before locking the license.',
        [{ text: 'OK', style: 'default' }]
      );
      return;
    }

    Alert.alert(
      '🔒 Lock License?',
      'Once locked, only you will be able to modify this license with your password. This action cannot be undone without the password.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Lock License',
          style: 'destructive',
          onPress: () => {
            setIsLocked(true);
            Alert.alert(
              '✅ License Locked!',
              'Your license is now protected. Keep your password safe!',
              [{ text: 'Got it!', style: 'default' }]
            );
          },
        },
      ]
    );
  };

  const handleUnlockLicense = () => {
    // In a real app, you would verify the password here
    Alert.alert(
      '🔓 Unlock License?',
      'Enter your password to unlock and modify the license.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Unlock',
          onPress: () => {
            setIsLocked(false);
            Alert.alert(
              '✅ License Unlocked!',
              'You can now modify the license information.',
              [{ text: 'OK', style: 'default' }]
            );
          },
        },
      ]
    );
  };

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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}>
            <ArrowLeft size={24} color="white" strokeWidth={3} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>🛡️ License & Copyright</Text>
          <View style={styles.headerIcon}>
            <Shield size={24} color="white" strokeWidth={3} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* License Status */}
        <View style={styles.statusContainer}>
          <View style={[styles.statusBadge, isLocked ? styles.lockedBadge : styles.unlockedBadge]}>
            {isLocked ? (
              <Lock size={20} color="white" strokeWidth={3} />
            ) : (
              <Unlock size={20} color="white" strokeWidth={3} />
            )}
            <Text style={styles.statusText}>
              {isLocked ? 'License Locked' : 'License Unlocked'}
            </Text>
          </View>
        </View>

        {/* Owner Information */}
        <View style={styles.ownerContainer}>
          <Text style={styles.sectionTitle}>License Owner Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name *</Text>
            <TextInput
              style={[styles.input, isLocked && styles.disabledInput]}
              value={ownerName}
              onChangeText={setOwnerName}
              placeholder="Enter your full name"
              editable={!isLocked}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>ID Number *</Text>
            <TextInput
              style={[styles.input, isLocked && styles.disabledInput]}
              value={ownerId}
              onChangeText={setOwnerId}
              placeholder="Enter your ID number"
              editable={!isLocked}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Contact Email *</Text>
            <TextInput
              style={[styles.input, isLocked && styles.disabledInput]}
              value={ownerEmail}
              onChangeText={setOwnerEmail}
              placeholder="Enter your email address"
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLocked}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Protection Password *</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, isLocked && styles.disabledInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="Create a strong password"
                secureTextEntry={!showPassword}
                editable={!isLocked}
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#666" strokeWidth={3} />
                ) : (
                  <Eye size={20} color="#666" strokeWidth={3} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {!isLocked ? (
            <TouchableOpacity
              style={styles.lockButton}
              onPress={handleLockLicense}>
              <Lock size={20} color="white" strokeWidth={3} />
              <Text style={styles.lockButtonText}>Lock License</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.unlockButton}
              onPress={handleUnlockLicense}>
              <Unlock size={20} color="white" strokeWidth={3} />
              <Text style={styles.unlockButtonText}>Unlock License</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* License Text */}
        <View style={styles.licenseContainer}>
          <Text style={styles.sectionTitle}>Open Source License</Text>
          
          <View style={styles.licenseText}>
            <Text style={styles.licenseTitle}>Color & Learn - Autism-Friendly Coloring App</Text>
            <Text style={styles.licenseSubtitle}>Open Source Educational Software</Text>
            
            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>Copyright Notice:</Text>
              {'\n'}This software is protected under open source licensing terms. 
              The original creator retains copyright ownership while allowing free use, 
              modification, and distribution under specific conditions.
            </Text>

            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>Permitted Uses:</Text>
              {'\n'}• Free personal and educational use
              {'\n'}• Modification and customization for family needs
              {'\n'}• Non-commercial distribution and sharing
              {'\n'}• Educational and therapeutic applications
              {'\n'}• Community improvements and contributions
            </Text>

            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>Restrictions:</Text>
              {'\n'}• Commercial sale or monetization is PROHIBITED without written permission
              {'\n'}• Must maintain original copyright notices
              {'\n'}• Cannot claim ownership of the original work
              {'\n'}• Cannot remove or modify license terms
              {'\n'}• Must provide source code if distributing modifications
            </Text>

            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>License Owner Rights:</Text>
              {'\n'}The registered license owner (information above) has exclusive rights to:
              {'\n'}• Grant commercial licensing permissions
              {'\n'}• Modify license terms for their version
              {'\n'}• Take legal action against unauthorized commercial use
              {'\n'}• Transfer ownership rights
            </Text>

            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>Disclaimer:</Text>
              {'\n'}This software is provided "as is\" without warranty. 
              The creators are not liable for any damages arising from its use. 
              This app is designed for educational and therapeutic purposes.
            </Text>

            <Text style={styles.licenseSection}>
              <Text style={styles.licenseBold}>Contact for Commercial Use:</Text>
              {'\n'}For commercial licensing, partnerships, or permissions, 
              contact the license owner using the information provided above.
            </Text>

            <Text style={styles.licenseFooter}>
              This license ensures the app remains free for families while protecting 
              against unauthorized commercial exploitation. Thank you for supporting 
              open source educational software! 🎨❤️
            </Text>
          </View>
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
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  headerIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  statusContainer: {
    alignItems: 'center',
    margin: 24,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
  },
  lockedBadge: {
    backgroundColor: '#EF4444',
  },
  unlockedBadge: {
    backgroundColor: '#10B981',
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  ownerContainer: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  disabledInput: {
    backgroundColor: '#F3F4F6',
    color: '#9CA3AF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  passwordToggle: {
    padding: 16,
  },
  lockButton: {
    backgroundColor: '#EF4444',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  lockButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  unlockButton: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  unlockButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  licenseContainer: {
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
  licenseText: {
    gap: 16,
  },
  licenseTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF6B9D',
    textAlign: 'center',
    marginBottom: 4,
  },
  licenseSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  licenseSection: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  licenseBold: {
    fontWeight: '700',
    color: '#FF6B9D',
  },
  licenseFooter: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  bottomSpacer: {
    height: 30,
  },
});