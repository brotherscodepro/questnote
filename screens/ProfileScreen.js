import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressBar from '../components/ProgressBar';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { USER, ACHIEVEMENTS, THEMES } from '../constants/data';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <Text style={styles.headerTitle}>O TEU PERFIL</Text>

        {/* Avatar Card */}
        <View style={styles.avatarCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧙‍♂️</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{USER.level}</Text>
            </View>
          </View>
          <Text style={styles.userName}>{USER.name}</Text>
          <Text style={styles.userSince}>Aventureiro desde {USER.memberSince}</Text>

          <View style={styles.xpSection}>
            <Text style={styles.xpLabel}>
              {USER.xp} / {USER.xpMax} XP
            </Text>
            <ProgressBar
              progress={(USER.xp / USER.xpMax) * 100}
              height={8}
              color={COLORS.primary}
            />
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.notes}</Text>
            <Text style={styles.statLabel}>NOTAS</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.lists}</Text>
            <Text style={styles.statLabel}>LISTAS</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.tasks}</Text>
            <Text style={styles.statLabel}>TAREFAS</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.streakDays}</Text>
            <Text style={styles.statLabel}>STREAK</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.totalXp.toLocaleString()}</Text>
            <Text style={styles.statLabel}>XP TOTAL</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USER.conquests}</Text>
            <Text style={styles.statLabel}>CONQUISTAS</Text>
          </View>
        </View>

        {/* Conquistas */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>CONQUISTAS</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.achievementsRow}>
            {ACHIEVEMENTS.map((ach) => (
              <View
                key={ach.id}
                style={[
                  styles.achievementCard,
                  !ach.unlocked && styles.achievementLocked,
                ]}
              >
                <Text style={styles.achievementIcon}>
                  {ach.unlocked ? ach.icon : '🔒'}
                </Text>
                <Text style={styles.achievementTitle}>{ach.title}</Text>
                <Text style={styles.achievementSub}>{ach.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Temas */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>TEMAS DESBLOQUEADOS</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver loja</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.themesRow}>
            {THEMES.map((theme) => (
              <View
                key={theme.id}
                style={[
                  styles.themeCard,
                  !theme.unlocked && styles.themeLocked,
                ]}
              >
                <View
                  style={[
                    styles.themePreview,
                    theme.name === 'Escuro' && { backgroundColor: '#1A1735' },
                    theme.name === 'Oceano' && { backgroundColor: '#0C4A6E' },
                    theme.name === 'Floresta' && { backgroundColor: '#14532D' },
                    theme.name === 'Galáxia' && { backgroundColor: '#4C1D95' },
                  ]}
                >
                  {theme.unlocked ? (
                    <Ionicons name="checkmark-circle" size={16} color={COLORS.success} />
                  ) : (
                    <Ionicons name="lock-closed" size={16} color={COLORS.textMuted} />
                  )}
                </View>
                <Text style={styles.themeName}>{theme.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    padding: SPACING.lg,
    paddingBottom: 40,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  avatarCard: {
    alignItems: 'center',
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderWidth: 3,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  avatarEmoji: {
    fontSize: 48,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: COLORS.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.backgroundCard,
  },
  levelText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  userName: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: '800',
  },
  userSince: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginTop: 4,
    marginBottom: SPACING.lg,
  },
  xpSection: {
    width: '100%',
  },
  xpLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  statItem: {
    flex: 1,
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statValue: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontWeight: '700',
    marginTop: 2,
  },
  section: {
    marginTop: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  seeAll: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: '600',
  },
  achievementsRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  achievementCard: {
    flex: 1,
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  achievementLocked: {
    opacity: 0.45,
  },
  achievementIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  achievementTitle: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  achievementSub: {
    color: COLORS.textMuted,
    fontSize: 10,
    marginTop: 2,
  },
  themesRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  themeCard: {
    flex: 1,
    alignItems: 'center',
  },
  themeLocked: {
    opacity: 0.45,
  },
  themePreview: {
    width: '100%',
    height: 48,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  themeName: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '600',
  },
});
