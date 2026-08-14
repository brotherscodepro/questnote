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
import { MISSIONS } from '../constants/data';

const TABS = ['Ativas', 'Completas', 'Recorrentes'];

const ICONS = {
  1: { lib: 'ion', name: 'cart-outline' },
  2: { lib: 'ion', name: 'document-text-outline' },
  3: { lib: 'mci', name: 'tent' },
};

function MissionIcon({ id, color }) {
  const conf = ICONS[id] || ICONS[1];
  if (conf.lib === 'mci') {
    return <MaterialCommunityIcons name={conf.name} size={26} color={color} />;
  }
  return <Ionicons name={conf.name} size={26} color={color} />;
}

export default function MissionsScreen() {
  const [activeTab, setActiveTab] = useState('Ativas');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="chevron-back" size={22} color="#E8DCC8" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AS MINHAS MISSÕES</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="add" size={24} color="#E8DCC8" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        {TABS.map((tab) => {
          const active = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, active && styles.tabActive]}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
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
              activeOpacity={0.85}
              style={[styles.card, { borderColor: mission.color + '99' }]}
            >
              {/* soft color wash */}
              <View
                pointerEvents="none"
                style={[styles.wash, { backgroundColor: mission.color + '14' }]}
              />

              {/* ribbon star */}
              <View style={styles.ribbon}>
                <View style={styles.ribbonBody}>
                  <Ionicons name="star" size={11} color="#F5E6A0" />
                </View>
                <View style={styles.ribbonPoint} />
              </View>

              <View style={styles.cardBody}>
                <View style={styles.topRow}>
                  <View style={[styles.iconWrap, { borderColor: mission.color + '55' }]}>
                    <MissionIcon id={mission.id} color={mission.color} />
                  </View>
                  <View style={styles.titles}>
                    <Text style={styles.title}>{mission.title}</Text>
                    <Text style={styles.subtitle}>
                      {mission.progress} / {mission.total} itens
                    </Text>
                  </View>
                </View>

                <View style={styles.barWrap}>
                  <ProgressBar
                    progress={progress}
                    height={5}
                    color={mission.color}
                    bgColor="rgba(255,255,255,0.08)"
                  />
                </View>

                <View style={styles.rewardRow}>
                  <Text style={styles.rewardLabel}>RECOMPENSA</Text>
                  <View style={styles.rewardValues}>
                    <Text style={[styles.xp, { color: mission.color }]}>
                      +{mission.xp} XP
                    </Text>
                    <View style={styles.coins}>
                      <Text style={styles.coinEmoji}>🪙</Text>
                      <Text style={styles.coinNum}>{mission.coins}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.createBtn} activeOpacity={0.7}>
          <Text style={styles.createText}>+  Criar nova missão</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0A14' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#E8DCC8',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  tabs: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 18,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 14,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 9,
    alignItems: 'center',
    borderRadius: 11,
  },
  tabActive: { backgroundColor: '#7C3AED' },
  tabText: {
    color: 'rgba(232,220,200,0.45)',
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: { color: '#FFF' },

  scroll: { paddingHorizontal: 16, paddingBottom: 40 },

  card: {
    borderRadius: 16,
    borderWidth: 1.5,
    marginBottom: 14,
    backgroundColor: '#0E0C1A',
    overflow: 'hidden',
    position: 'relative',
  },
  wash: {
    ...StyleSheet.absoluteFillObject,
  },
  cardBody: {
    padding: 16,
    paddingTop: 18,
  },

  ribbon: {
    position: 'absolute',
    top: 0,
    right: 16,
    zIndex: 4,
    alignItems: 'center',
  },
  ribbonBody: {
    backgroundColor: '#5B4B9A',
    width: 24,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  ribbonPoint: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#5B4B9A',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titles: { flex: 1, paddingRight: 28 },
  title: {
    color: '#F2EAD8',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    color: 'rgba(232,220,200,0.4)',
    fontSize: 12,
    fontWeight: '500',
  },

  barWrap: { marginBottom: 14 },

  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rewardLabel: {
    color: 'rgba(232,220,200,0.28)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  rewardValues: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  xp: {
    fontSize: 13,
    fontWeight: '700',
  },
  coins: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  coinEmoji: { fontSize: 12 },
  coinNum: {
    color: '#E8B84A',
    fontSize: 13,
    fontWeight: '700',
  },

  createBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.12)',
    borderStyle: 'dashed',
    marginTop: 2,
  },
  createText: {
    color: 'rgba(167,139,250,0.55)',
    fontSize: 14,
    fontWeight: '600',
  },
});
