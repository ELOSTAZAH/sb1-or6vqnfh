import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Trophy, Star, Target, Award, Cat, Carrot, Apple, Flower, Heart } from 'lucide-react-native';

export default function ProgressScreen() {
  const stats = {
    totalCompleted: 8,
    totalPages: 15,
    currentStreak: 5,
    totalStars: 18,
    totalFlowers: 12,
  };

  const achievements = [
    {
      id: 'first-color',
      title: 'First Colors! 🎨',
      description: 'Complete your first coloring page',
      icon: Star,
      earned: true,
      color: '#10B981',
      reward: '⭐',
    },
    {
      id: 'animal-lover',
      title: 'Animal Friend 🐱',
      description: 'Complete 3 animal pages',
      icon: Cat,
      earned: true,
      color: '#3B82F6',
      reward: '🌸',
    },
    {
      id: 'streak-master',
      title: 'Daily Artist 🔥',
      description: 'Color for 5 days in a row',
      icon: Target,
      earned: true,
      color: '#F59E0B',
      reward: '🏆',
    },
    {
      id: 'veggie-master',
      title: 'Veggie Expert 🥕',
      description: 'Complete 3 vegetable pages',
      icon: Carrot,
      earned: false,
      color: '#F59E0B',
      reward: '🌻',
    },
    {
      id: 'fruit-expert',
      title: 'Fruit Master 🍎',
      description: 'Complete 3 fruit pages',
      icon: Apple,
      earned: false,
      color: '#EF4444',
      reward: '🌺',
    },
    {
      id: 'perfectionist',
      title: 'Perfect Artist 🌟',
      description: 'Get 3 stars on 5 pages',
      icon: Award,
      earned: false,
      color: '#8B5CF6',
      reward: '👑',
    },
  ];

  const categoryProgress = [
    {
      id: 'animals',
      title: 'Animals 🐱',
      completed: 4,
      total: 5,
      color: '#10B981',
      icon: Cat,
      stars: 9,
    },
    {
      id: 'vegetables',
      title: 'Vegetables 🥕',
      completed: 2,
      total: 5,
      color: '#F59E0B',
      icon: Carrot,
      stars: 5,
    },
    {
      id: 'fruits',
      title: 'Fruits 🍎',
      completed: 2,
      total: 5,
      color: '#EF4444',
      icon: Apple,
      stars: 4,
    },
  ];

  const recentRewards = [
    { type: 'star', count: 3, reason: 'Completed Friendly Cat!' },
    { type: 'flower', count: 1, reason: 'Perfect coloring!' },
    { type: 'star', count: 2, reason: 'Finished Happy Dog!' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE4E1', '#FFF0F5', '#F0F8FF']}
        style={styles.background}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#FF6B9D', '#C44569']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>🏆 Your Amazing Progress</Text>
            <Text style={styles.headerSubtitle}>
              Look how much you've accomplished! ✨
            </Text>
            <View style={styles.rewardContainer}>
              <View style={styles.rewardItem}>
                <Text style={styles.rewardIcon}>⭐</Text>
                <Text style={styles.rewardCount}>{stats.totalStars}</Text>
              </View>
              <View style={styles.rewardItem}>
                <Text style={styles.rewardIcon}>🌸</Text>
                <Text style={styles.rewardCount}>{stats.totalFlowers}</Text>
              </View>
              <View style={styles.rewardItem}>
                <Text style={styles.rewardIcon}>🏆</Text>
                <Text style={styles.rewardCount}>{stats.currentStreak}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          {/* Stats Overview */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.statGradient}>
                <Target size={28} color="white" strokeWidth={3} />
                <Text style={styles.statNumber}>{stats.totalCompleted}</Text>
                <Text style={styles.statLabel}>Completed</Text>
              </LinearGradient>
            </View>

            <View style={styles.statCard}>
              <LinearGradient
                colors={['#F59E0B', '#D97706']}
                style={styles.statGradient}>
                <Star size={28} color="white" strokeWidth={3} />
                <Text style={styles.statNumber}>{stats.currentStreak}</Text>
                <Text style={styles.statLabel}>Day Streak</Text>
              </LinearGradient>
            </View>

            <View style={styles.statCard}>
              <LinearGradient
                colors={['#8B5CF6', '#7C3AED']}
                style={styles.statGradient}>
                <Trophy size={28} color="white" strokeWidth={3} />
                <Text style={styles.statNumber}>{stats.totalStars}</Text>
                <Text style={styles.statLabel}>Total Stars</Text>
              </LinearGradient>
            </View>
          </View>

          {/* Overall Progress */}
          <View style={styles.overallProgress}>
            <Text style={styles.sectionTitle}>Overall Progress 📊</Text>
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>Coloring Journey</Text>
                <Text style={styles.progressPercentage}>
                  {Math.round((stats.totalCompleted / stats.totalPages) * 100)}%
                </Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                  <LinearGradient
                    colors={['#FF6B9D', '#C44569']}
                    style={[
                      styles.progressFill,
                      {
                        width: `${(stats.totalCompleted / stats.totalPages) * 100}%`,
                      },
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  />
                </View>
                <Text style={styles.progressText}>
                  {stats.totalCompleted} of {stats.totalPages} pictures completed! 🎨
                </Text>
              </View>
            </View>
          </View>

          {/* Recent Rewards */}
          <View style={styles.rewardsSection}>
            <Text style={styles.sectionTitle}>Recent Rewards 🎁</Text>
            <View style={styles.rewardsList}>
              {recentRewards.map((reward, index) => (
                <View key={index} style={styles.rewardCard}>
                  <View style={styles.rewardIconContainer}>
                    <Text style={styles.rewardEmoji}>
                      {reward.type === 'star' ? '⭐' : '🌸'}
                    </Text>
                    <Text style={styles.rewardNumber}>+{reward.count}</Text>
                  </View>
                  <Text style={styles.rewardReason}>{reward.reason}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Category Progress */}
          <View style={styles.categorySection}>
            <Text style={styles.sectionTitle}>Category Progress 📚</Text>
            <View style={styles.categoryList}>
              {categoryProgress.map((category) => (
                <View key={category.id} style={styles.categoryCard}>
                  <View style={styles.categoryHeader}>
                    <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                      <category.icon size={24} color={category.color} strokeWidth={3} />
                    </View>
                    <View style={styles.categoryInfo}>
                      <Text style={styles.categoryTitle}>{category.title}</Text>
                      <Text style={styles.categoryStats}>
                        {category.completed}/{category.total} completed • {category.stars} ⭐
                      </Text>
                    </View>
                    <Text style={styles.categoryPercentage}>
                      {Math.round((category.completed / category.total) * 100)}%
                    </Text>
                  </View>
                  <View style={styles.categoryProgressBar}>
                    <View
                      style={[
                        styles.categoryProgressFill,
                        {
                          width: `${(category.completed / category.total) * 100}%`,
                          backgroundColor: category.color,
                        },
                      ]}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Achievements */}
          <View style={styles.achievementsSection}>
            <Text style={styles.sectionTitle}>Achievements 🏅</Text>
            <View style={styles.achievementsList}>
              {achievements.map((achievement) => (
                <View
                  key={achievement.id}
                  style={[
                    styles.achievementCard,
                    achievement.earned && styles.achievementEarned,
                  ]}>
                  <View style={[
                    styles.achievementIcon,
                    { backgroundColor: achievement.earned ? achievement.color + '20' : '#F3F4F6' }
                  ]}>
                    <achievement.icon
                      size={28}
                      color={achievement.earned ? achievement.color : '#9CA3AF'}
                      strokeWidth={3}
                    />
                  </View>
                  <View style={styles.achievementContent}>
                    <Text
                      style={[
                        styles.achievementTitle,
                        achievement.earned && styles.achievementTitleEarned,
                      ]}>
                      {achievement.title}
                    </Text>
                    <Text style={styles.achievementDescription}>
                      {achievement.description}
                    </Text>
                  </View>
                  <View style={styles.achievementReward}>
                    {achievement.earned ? (
                      <View style={styles.achievementBadge}>
                        <Text style={styles.achievementRewardText}>{achievement.reward}</Text>
                      </View>
                    ) : (
                      <Text style={styles.achievementRewardPreview}>{achievement.reward}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Encouragement */}
          <View style={styles.encouragementContainer}>
            <Text style={styles.encouragementTitle}>Keep Going! 🌟</Text>
            <Text style={styles.encouragementText}>
              You're doing amazing! Every picture you color makes you a better artist. 
              Keep exploring and having fun! 🎨✨
            </Text>
          </View>

          <View style={styles.bottomSpacer} />
        </View>
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
  headerTitle: {
    fontSize: 28,
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
  rewardContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  rewardItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 12,
    minWidth: 60,
  },
  rewardIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  rewardCount: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  content: {
    padding: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  statGradient: {
    padding: 20,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '600',
  },
  overallProgress: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B9D',
  },
  progressBarContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 6,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontWeight: '600',
  },
  rewardsSection: {
    marginBottom: 32,
  },
  rewardsList: {
    gap: 12,
  },
  rewardCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  rewardIconContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  rewardEmoji: {
    fontSize: 24,
  },
  rewardNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B9D',
    marginTop: 2,
  },
  rewardReason: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flex: 1,
  },
  categorySection: {
    marginBottom: 32,
  },
  categoryList: {
    gap: 16,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  categoryStats: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryPercentage: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
  },
  categoryProgressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  categoryProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  achievementsSection: {
    marginBottom: 32,
  },
  achievementsList: {
    gap: 16,
  },
  achievementCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    opacity: 0.6,
  },
  achievementEarned: {
    opacity: 1,
    borderWidth: 3,
    borderColor: '#10B981',
  },
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  achievementTitleEarned: {
    color: '#333',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  achievementReward: {
    alignItems: 'center',
  },
  achievementBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementRewardText: {
    fontSize: 20,
  },
  achievementRewardPreview: {
    fontSize: 24,
    opacity: 0.5,
  },
  encouragementContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  encouragementTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B9D',
    marginBottom: 12,
    textAlign: 'center',
  },
  encouragementText: {
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