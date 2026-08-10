import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from '../components/ProgressBar';
import XPBadge from '../components/XPBadge';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { QUESTS, QUEST_STATS } from '../constants/data';

const PRIORITY_COLORS = {
  ALTA: COLORS.priorityHigh,
  MÉDIA: COLORS.priorityMedium,
  BAIXA: COLORS.priorityLow,
};

export default function QuestsScreen() {
  const [filter, setFilter] = useState('Todas');

  const activeQuests = QUESTS.filter((q) => !q.completed);
  const completedQuests = QUESTS.filter((q) => q.completed);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AS MINHAS QUESTS</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderColor: COLORS.warning + '50' }]}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.warning + '20' }]}>
            <Ionicons name="time" size={18} color={COLORS.warning} />
          </View>
          <Text style={styles.statNumber}>{QUEST_STATS.pending}</Text>
          <Text style={styles.statLabel}>PENDENTES</Text>
        </View>
        <View style={[styles.statCard, { borderColor: COLORS.danger + '50' }]}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.danger + '20' }]}>
            <Ionicons name="alert-circle" size={18} color={COLORS.danger} />
          </View>
          <Text style={styles.statNumber}>{QUEST_STATS.overdue}</Text>
          <Text style={styles.statLabel}>ATRASADA</Text>
        </View>
        <View style={[styles.statCard, { borderColor: COLORS.success + '50' }]}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.success + '20' }]}>
            <Ionicons name="checkmark-circle" size={18} color={COLORS.success} />
          </View>
          <Text style={styles.statNumber}>{QUEST_STATS.completed}</Text>
          <Text style={styles.statLabel}>CONCLUÍDAS</Text>
        </View>
      </View>

      {/* Filter */}
      <View style={styles.filterRow}>
        <Text style={styles.filterLabel}>Ordenar: Prioridade</Text>
        <TouchableOpacity>
          <Text style={styles.filterValue}>Todas ▾</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Active Quests */}
        {activeQuests.map((quest) => (
          <TouchableOpacity
            key={quest.id}
            style={styles.questCard}
            activeOpacity={0.7}
          >
            <View style={styles.questTop}>
              <View style={styles.questLeft}>
                {quest.priority && (
                  <View
                    style={[
                      styles.priorityBadge,
                      { backgroundColor: PRIORITY_COLORS[quest.priority] + '25' },
                    ]}
                  >
                    <Text
                      style={[
                        styles.priorityText,
                        { color: PRIORITY_COLORS[quest.priority] },
                      ]}
                    >
                      {quest.priority}
                    </Text>
                  </View>
                )}
                <Text style={styles.questTitle}>{quest.title}</Text>
                {quest.due && (
                  <Text style={styles.questDue}>{quest.due}</Text>
                )}
              </View>
              <XPBadge xp={quest.xp} />
            </View>
            {quest.progress > 0 && (
              <View style={styles.progressRow}>
                <ProgressBar progress={quest.progress} height={4} />
                <Text style={styles.progressText}>{quest.progress}%</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {/* Completed */}
        {completedQuests.length > 0 && (
          <>
            <Text style={styles.completedLabel}>Concluídas</Text>
            {completedQuests.map((quest) => (
              <View key={quest.id} style={[styles.questCard, styles.questCompleted]}>
                <View style={styles.questTop}>
                  <View style={styles.questLeft}>
                    <View style={styles.checkIcon}>
                      <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
                    </View>
                    <Text style={[styles.questTitle, styles.questTitleDone]}>
                      {quest.title}
                    </Text>
                  </View>
                  <XPBadge xp={quest.xp} />
                </View>
              </View>
            ))}
          </>
        )}
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
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
  },
  statIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  statNumber: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
  },
  statLabel: {
    color: COLORS.textMuted,
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  filterLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  filterValue: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: '600',
  },
  scroll: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 40,
  },
  questCard: {
    backgroundColor: COLORS.backgroundCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  questCompleted: {
    opacity: 0.6,
  },
  questTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  questLeft: {
    flex: 1,
    gap: 4,
  },
  priorityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
    marginBottom: 4,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '800',
  },
  questTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
  },
  questTitleDone: {
    textDecorationLine: 'line-through',
    color: COLORS.textMuted,
  },
  questDue: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.md,
  },
  progressText: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: '600',
    minWidth: 30,
  },
  completedLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '700',
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  checkIcon: {
    marginBottom: 2,
  },
});
