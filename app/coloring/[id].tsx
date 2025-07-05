import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, RotateCcw, Save, Heart, Star, Trophy, Music, Volume2, VolumeX } from 'lucide-react-native';
import { useState, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function ColoringPageScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const pageId = params.id as string;
  const category = params.category as string;

  const [selectedColor, setSelectedColor] = useState('#FF6B6B');
  const [selectedPenSize, setSelectedPenSize] = useState(2);
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [completedAreas, setCompletedAreas] = useState<number[]>([]);

  // Enhanced color palette with more vibrant colors
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57',
    '#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3', '#FF9F43',
    '#00B894', '#FDCB6E', '#6C5CE7', '#A29BFE', '#FD79A8',
    '#E17055', '#81ECEC', '#74B9FF', '#C44569', '#F8B500',
    '#FF3838', '#FF6348', '#FF4757', '#FF6B9D', '#C44569',
    '#3742FA', '#2F3542', '#57606F', '#A4B0BE', '#747D8C',
  ];

  // Different pen sizes for variety
  const penSizes = [
    { size: 1, label: 'Thin', icon: '✏️' },
    { size: 2, label: 'Normal', icon: '🖊️' },
    { size: 3, label: 'Thick', icon: '🖍️' },
    { size: 4, label: 'Big', icon: '🖌️' },
  ];

  const pageTitles = {
    cat: 'Friendly Cat 🐱',
    dog: 'Happy Dog 🐶',
    elephant: 'Big Elephant 🐘',
    butterfly: 'Beautiful Butterfly 🦋',
    lion: 'Brave Lion 🦁',
    carrot: 'Orange Carrot 🥕',
    broccoli: 'Green Broccoli 🥦',
    tomato: 'Red Tomato 🍅',
    corn: 'Sweet Corn 🌽',
    apple: 'Red Apple 🍎',
    banana: 'Yellow Banana 🍌',
    grapes: 'Purple Grapes 🍇',
    strawberry: 'Sweet Strawberry 🍓',
  };

  // Numbered areas for each image (simulated)
  const numberedAreas = {
    cat: 8,
    dog: 6,
    elephant: 12,
    butterfly: 15,
    lion: 20,
    carrot: 5,
    broccoli: 7,
    tomato: 10,
    corn: 18,
    apple: 4,
    banana: 6,
    grapes: 14,
    strawberry: 16,
  };

  const totalAreas = numberedAreas[pageId as keyof typeof numberedAreas] || 10;

  const handleSave = () => {
    setIsSaved(true);
    const starsEarned = Math.min(3, Math.floor((completedAreas.length / totalAreas) * 3));
    
    Alert.alert(
      '🎉 Amazing Work! 🎉',
      `You colored ${completedAreas.length} out of ${totalAreas} areas!\n⭐ You earned ${starsEarned} stars! ⭐\n\nKeep going, you're doing great!`,
      [
        {
          text: 'Continue Coloring 🎨',
          style: 'default',
        },
        {
          text: 'Go Back 🏠',
          onPress: () => router.back(),
          style: 'cancel',
        },
      ]
    );
  };

  const handleReset = () => {
    Alert.alert(
      'Start Fresh? 🎨',
      'Do you want to clear all your colors and start over?',
      [
        {
          text: 'Keep Coloring',
          style: 'cancel',
        },
        {
          text: 'Start Over',
          onPress: () => {
            setCompletedAreas([]);
            setIsSaved(false);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleAreaColor = (areaNumber: number) => {
    if (!completedAreas.includes(areaNumber)) {
      setCompletedAreas([...completedAreas, areaNumber]);
      
      // Show encouragement for each completed area
      if (completedAreas.length + 1 === totalAreas) {
        Alert.alert('🏆 Perfect! 🏆', 'You colored everything! Amazing job! 🌟');
      } else if ((completedAreas.length + 1) % 3 === 0) {
        Alert.alert('⭐ Great! ⭐', 'You\'re doing wonderful! Keep going! 🎨');
      }
    }
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
            <ArrowLeft size={20} color="white" strokeWidth={3} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {pageTitles[pageId as keyof typeof pageTitles] || 'Coloring Page'}
          </Text>
          <TouchableOpacity
            style={styles.musicButton}
            onPress={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <Volume2 size={20} color="white" strokeWidth={3} />
            ) : (
              <VolumeX size={20} color="white" strokeWidth={3} />
            )}
          </TouchableOpacity>
        </View>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Progress: {completedAreas.length}/{totalAreas} areas colored
          </Text>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={['#FFD700', '#FFA500']}
              style={[
                styles.progressFill,
                { width: `${(completedAreas.length / totalAreas) * 100}%` }
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <View style={styles.starsRow}>
            {Array.from({ length: 3 }, (_, i) => (
              <Star
                key={i}
                size={20}
                color={i < Math.floor((completedAreas.length / totalAreas) * 3) ? "#FFD700" : "#E5E7EB"}
                fill={i < Math.floor((completedAreas.length / totalAreas) * 3) ? "#FFD700" : "transparent"}
              />
            ))}
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Split View: Reference and Coloring */}
        <View style={styles.splitContainer}>
          <View style={styles.referenceContainer}>
            <Text style={styles.sectionLabel}>🖼️ Reference Picture</Text>
            <View style={styles.referenceImage}>
              <Text style={styles.placeholderText}>📸</Text>
              <Text style={styles.placeholderSubtext}>Colored Example</Text>
            </View>
          </View>
          
          <View style={styles.coloringContainer}>
            <Text style={styles.sectionLabel}>🎨 Your Coloring</Text>
            <View style={styles.coloringCanvas}>
              <View style={styles.numberedGrid}>
                {Array.from({ length: totalAreas }, (_, i) => (
                  <TouchableOpacity
                    key={i + 1}
                    style={[
                      styles.numberedArea,
                      completedAreas.includes(i + 1) && styles.coloredArea,
                      { backgroundColor: completedAreas.includes(i + 1) ? selectedColor : 'white' }
                    ]}
                    onPress={() => handleAreaColor(i + 1)}>
                    <Text style={[
                      styles.areaNumber,
                      completedAreas.includes(i + 1) && styles.coloredNumber
                    ]}>
                      {i + 1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Pen Size Selector */}
        <View style={styles.penSizeContainer}>
          <Text style={styles.sectionTitle}>Choose Your Pen 🖍️</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.penSizeScroll}>
            {penSizes.map((pen, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.penSizeButton,
                  selectedPenSize === pen.size && styles.selectedPenSize,
                ]}
                onPress={() => setSelectedPenSize(pen.size)}>
                <Text style={styles.penIcon}>{pen.icon}</Text>
                <Text style={styles.penLabel}>{pen.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Color Palette */}
        <View style={styles.paletteContainer}>
          <Text style={styles.sectionTitle}>Pick Your Colors! 🌈</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.colorPalette}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => setSelectedColor(color)}
                  activeOpacity={0.8}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}>
            <RotateCcw size={20} color="#666" strokeWidth={3} />
            <Text style={styles.resetButtonText}>Start Over</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButtonMain}
            onPress={handleSave}>
            <Trophy size={20} color="white" strokeWidth={3} />
            <Text style={styles.saveButtonText}>Save & Win Stars!</Text>
          </TouchableOpacity>
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
    paddingBottom: 20,
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
    marginBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  musicButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  content: {
    flex: 1,
  },
  splitContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  referenceContainer: {
    flex: 1,
  },
  coloringContainer: {
    flex: 1,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  referenceImage: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  coloringCanvas: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 200,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  numberedGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  numberedArea: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  coloredArea: {
    borderColor: '#333',
  },
  areaNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333',
  },
  coloredNumber: {
    color: 'white',
  },
  placeholderText: {
    fontSize: 48,
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  penSizeContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  penSizeScroll: {
    flexGrow: 0,
  },
  penSizeButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedPenSize: {
    backgroundColor: '#FF6B9D',
  },
  penIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  penLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  paletteContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  colorPalette: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 8,
  },
  colorButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  selectedColor: {
    borderColor: '#333',
    transform: [{ scale: 1.1 }],
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 16,
  },
  resetButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
    marginLeft: 8,
  },
  saveButtonMain: {
    flex: 2,
    backgroundColor: '#10B981',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginLeft: 8,
  },
  bottomSpacer: {
    height: 30,
  },
});