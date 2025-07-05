import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Palette, Lock, Star, Trophy } from 'lucide-react-native';

export default function ColoringScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const category = params.category as string || 'animals';

  const coloringPages = {
    animals: [
      {
        id: 'cat',
        title: 'Friendly Cat',
        difficulty: 'Easy',
        completed: true,
        stars: 3,
        imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 8,
      },
      {
        id: 'dog',
        title: 'Happy Dog',
        difficulty: 'Easy',
        completed: true,
        stars: 3,
        imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 6,
      },
      {
        id: 'elephant',
        title: 'Big Elephant',
        difficulty: 'Medium',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 12,
      },
      {
        id: 'butterfly',
        title: 'Beautiful Butterfly',
        difficulty: 'Medium',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 15,
      },
      {
        id: 'lion',
        title: 'Brave Lion',
        difficulty: 'Hard',
        completed: false,
        locked: true,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/34729/lion-predator-animal-safari.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 20,
      },
    ],
    vegetables: [
      {
        id: 'carrot',
        title: 'Orange Carrot',
        difficulty: 'Easy',
        completed: true,
        stars: 3,
        imageUrl: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 5,
      },
      {
        id: 'broccoli',
        title: 'Green Broccoli',
        difficulty: 'Easy',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 7,
      },
      {
        id: 'tomato',
        title: 'Red Tomato',
        difficulty: 'Medium',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 10,
      },
      {
        id: 'corn',
        title: 'Sweet Corn',
        difficulty: 'Hard',
        completed: false,
        locked: true,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 18,
      },
    ],
    fruits: [
      {
        id: 'apple',
        title: 'Red Apple',
        difficulty: 'Easy',
        completed: true,
        stars: 3,
        imageUrl: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 4,
      },
      {
        id: 'banana',
        title: 'Yellow Banana',
        difficulty: 'Easy',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 6,
      },
      {
        id: 'grapes',
        title: 'Purple Grapes',
        difficulty: 'Medium',
        completed: false,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 14,
      },
      {
        id: 'strawberry',
        title: 'Sweet Strawberry',
        difficulty: 'Hard',
        completed: false,
        locked: true,
        stars: 0,
        imageUrl: 'https://images.pexels.com/photos/89778/strawberry-red-fruit-royalty-free-89778.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        numberedAreas: 16,
      },
    ],
  };

  const categoryTitles = {
    animals: 'Animals 🐱',
    vegetables: 'Vegetables 🥕',
    fruits: 'Fruits 🍎',
  };

  const difficultyColors = {
    Easy: '#10B981',
    Medium: '#F59E0B',
    Hard: '#EF4444',
  };

  const pages = coloringPages[category as keyof typeof coloringPages] || [];

  const handlePagePress = (pageId: string, locked: boolean) => {
    if (locked) return;
    router.push(`/coloring/${pageId}?category=${category}`);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        size={16}
        color={i < count ? "#FFD700" : "#E5E7EB"}
        fill={i < count ? "#FFD700" : "transparent"}
      />
    ));
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
          <Text style={styles.headerTitle}>
            {categoryTitles[category as keyof typeof categoryTitles]}
          </Text>
          <View style={styles.headerIcon}>
            <Palette size={24} color="white" strokeWidth={3} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.pagesContainer}>
          <Text style={styles.sectionTitle}>Choose Your Picture! 🎨</Text>
          <Text style={styles.sectionDescription}>
            Each picture has numbers to help you color! Follow the numbers and win stars! ⭐
          </Text>

          <View style={styles.pagesGrid}>
            {pages.map((page) => (
              <TouchableOpacity
                key={page.id}
                style={[
                  styles.pageCard,
                  page.locked && styles.lockedCard,
                  page.completed && styles.completedCard,
                ]}
                onPress={() => handlePagePress(page.id, page.locked || false)}
                activeOpacity={page.locked ? 1 : 0.7}>
                
                <View style={styles.pageImageContainer}>
                  <Image
                    source={{ uri: page.imageUrl }}
                    style={[
                      styles.pageImage,
                      page.locked && styles.lockedImage,
                    ]}
                    resizeMode="cover"
                  />
                  
                  {page.locked && (
                    <View style={styles.lockOverlay}>
                      <Lock size={28} color="white" strokeWidth={3} />
                      <Text style={styles.lockText}>Complete more to unlock!</Text>
                    </View>
                  )}
                  
                  {page.completed && (
                    <View style={styles.completedBadge}>
                      <Trophy size={20} color="white" strokeWidth={3} />
                    </View>
                  )}

                  <View style={styles.numberedBadge}>
                    <Text style={styles.numberedText}>{page.numberedAreas}</Text>
                    <Text style={styles.numberedLabel}>areas</Text>
                  </View>
                </View>

                <View style={styles.pageContent}>
                  <Text style={styles.pageTitle}>{page.title}</Text>
                  
                  <View style={styles.pageMeta}>
                    <View
                      style={[
                        styles.difficultyBadge,
                        {
                          backgroundColor:
                            difficultyColors[page.difficulty as keyof typeof difficultyColors],
                        },
                      ]}>
                      <Text style={styles.difficultyText}>
                        {page.difficulty}
                      </Text>
                    </View>
                    
                    <View style={styles.starsContainer}>
                      {renderStars(page.stars)}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
    fontSize: 24,
    fontWeight: '800',
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
  pagesContainer: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
    fontWeight: '500',
  },
  pagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  pageCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    width: '48%',
  },
  lockedCard: {
    opacity: 0.7,
  },
  completedCard: {
    borderWidth: 3,
    borderColor: '#10B981',
  },
  pageImageContainer: {
    position: 'relative',
    height: 140,
  },
  pageImage: {
    width: '100%',
    height: '100%',
  },
  lockedImage: {
    opacity: 0.3,
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  lockText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  completedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberedBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(255, 107, 157, 0.9)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  numberedText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  numberedLabel: {
    color: 'white',
    fontSize: 8,
    fontWeight: '600',
  },
  pageContent: {
    padding: 12,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  pageMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  bottomSpacer: {
    height: 20,
  },
});