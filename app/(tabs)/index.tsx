import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Cat, Carrot, Apple, Star, Sparkles, Heart, Music } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const categories = [
    {
      id: 'animals',
      title: 'Animals',
      description: 'Color cute animals and learn their names! 🐱🐶🐘',
      icon: Cat,
      gradient: ['#FFB6C1', '#FF69B4'],
      imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: 15,
      stars: 12,
    },
    {
      id: 'vegetables',
      title: 'Vegetables',
      description: 'Discover colorful vegetables and healthy eating! 🥕🥦🍅',
      icon: Carrot,
      gradient: ['#98FB98', '#32CD32'],
      imageUrl: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: 12,
      stars: 8,
    },
    {
      id: 'fruits',
      title: 'Fruits',
      description: 'Paint delicious fruits and learn about nature! 🍎🍌🍇',
      icon: Apple,
      gradient: ['#FFE4B5', '#FFA500'],
      imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: 10,
      stars: 6,
    },
  ];

  const handleCategoryPress = (categoryId: string) => {
    router.push(`/coloring?category=${categoryId}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE4E1', '#FFF0F5', '#F0F8FF']}
        style={styles.background}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#FF6B9D', '#C44569']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View style={styles.headerContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>🎨 Color & Learn</Text>
              <Text style={styles.headerSubtitle}>
                Fun coloring for amazing kids! ✨
              </Text>
            </View>
            <View style={styles.starContainer}>
              <Star size={28} color="#FFD700" fill="#FFD700" />
              <Sparkles size={32} color="#FFD700" fill="#FFD700" />
              <Star size={28} color="#FFD700" fill="#FFD700" />
            </View>
          </View>
        </LinearGradient>

        {/* Welcome Message */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome, Amazing Artist! 🌟</Text>
          <Text style={styles.welcomeText}>
            Choose what you'd like to color today. Each picture has numbers to help you! 
            Win stars and flowers when you finish! 🏆
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Choose Your Adventure</Text>
          
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { marginTop: index === 0 ? 0 : 20 }]}
              onPress={() => handleCategoryPress(category.id)}
              activeOpacity={0.8}>
              
              <LinearGradient
                colors={category.gradient}
                style={styles.categoryGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                
                <View style={styles.categoryContent}>
                  <View style={styles.categoryLeft}>
                    <View style={styles.categoryIconContainer}>
                      <category.icon size={40} color="white" strokeWidth={3} />
                    </View>
                    <View style={styles.categoryInfo}>
                      <Text style={styles.categoryTitle}>{category.title}</Text>
                      <Text style={styles.categoryDescription}>
                        {category.description}
                      </Text>
                      <View style={styles.categoryStats}>
                        <View style={styles.statItem}>
                          <Text style={styles.statNumber}>{category.count}</Text>
                          <Text style={styles.statLabel}>Pictures</Text>
                        </View>
                        <View style={styles.statItem}>
                          <Star size={16} color="#FFD700" fill="#FFD700" />
                          <Text style={styles.statNumber}>{category.stars}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.categoryImageContainer}>
                    <Image
                      source={{ uri: category.imageUrl }}
                      style={styles.categoryImage}
                      resizeMode="cover"
                    />
                    <View style={styles.imageOverlay}>
                      <Heart size={24} color="white" fill="white" />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Special Features 🎉</Text>
          
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔢</Text>
              <Text style={styles.featureText}>Numbers to guide you</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎨</Text>
              <Text style={styles.featureText}>Many colorful pens</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎵</Text>
              <Text style={styles.featureText}>Calm nature sounds</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>⭐</Text>
              <Text style={styles.featureText}>Win stars & flowers</Text>
            </View>
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
  scrollView: {
    flex: 1,
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '600',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B9D',
    textAlign: 'center',
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },
  categoriesContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryCard: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  categoryGradient: {
    padding: 20,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginBottom: 6,
  },
  categoryDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 12,
    fontWeight: '500',
  },
  categoryStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
  },
  categoryImageContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 107, 157, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuresContainer: {
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
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#FFF8F0',
    borderRadius: 15,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
  bottomSpacer: {
    height: 30,
  },
});