import React, { useState } from 'react';
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
import { MISSIONS } from '../constants/data';

const TABS = ['Ativas', 'Completas', 'Recorrentes'];

export default function MissionsScreen() {
  const [activeTab, setActiveTab] = useState('Ativas');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AS MINHAS MISSÕES</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {MISSIONS.map((mission) => {
          const progress = (mission.progress / mission.total) * 100;
          return (
            <TouchableOpacity
              key={mission.id}
              style={styles.missionCard}
              activeOpacity={0.7}
            >
              <View style={styles.missionHeader}>
                <View style={styles.missionTitleRow}>
                  <View style={[styles.missionIcon, { backgroundColor: mission.color + '25' }]}>
                    <Text style={styles.missionEmoji}>{mission.icon}</Text>
                  </View>
                  <View>
                    <Text style={styles.missionTitle}>{mission.title}</Text>
                    <Text style={styles.missionProgress}>
                      {mission.progress} / {mission.total} itens
                    </Text>
                  </View>
                </View>
                {mission.starred && (
                  <Ionicons name="star" size={18} color={COLORS.secondary} />
                )}
              </View>

              <ProgressBar progress={progress} height={6} color={mission.color} />

              <View style={styles.missionFooter}>
                <Text style={styles.rewardLabel}>RECOMPENSA</Text>
                <View style={styles.rewards}>
                  <View style={styles.rewardBadge}>
                    <Text style={styles.rewardXp}>+{mission.xp} XP</Text>
                  </View>
                  <View style={styles.rewardCoins}>
                    <MaterialCommunityIcons name="circle-multiple" size={12} color={COLORS.secondary} />
                    <Text style={styles.rewardCoinsText}>{mission.coins}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Create Mission */}
        <TouchableOpacity style={styles.createBtn} activeOpacity={0.7}>
          <Ionicons name="add" size={20} color={COLORS.primary} />
          <Text style={styles.createText}>Criar nova missão</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: SPACING.lg,
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.md,
    padding: 4,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    borderRadius: RADIUS.sm,
  },
  tabActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#FFF',
  },
  scroll: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 40,
  },
  missionCard: {
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  missionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  missionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  missionIcon: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionEmoji: {
    fontSize: 22,
  },
  missionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
  missionProgress: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  missionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  rewardLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: '600',
  },
  rewards: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  rewardBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.sm,
  },
  rewardXp: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: '700',
  },
  rewardCoins: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  rewardCoinsText: {
    color: COLORS.secondary,
    fontSize: 12,
    fontWeight: '700',
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    paddingVertical: SPACING.lg,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    marginTop: SPACING.sm,
  },
  createText: {
    color: COLORS.primaryLight,
    fontSize: 14,
    fontWeight: '600',
  },
});
