import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import ProgressBar from '../components/ProgressBar';
import { USER, DAILY_QUESTS } from '../constants/data';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const HERO_H = Math.round(SCREEN_H * 0.52);

function getCharacter(level) {
  if (level >= 20) return { title: 'Arquimago', color: '#A78BFA', key: 'arquimago' };
  if (level >= 15) return { title: 'Herói', color: '#F59E0B', key: 'heroi' };
  if (level >= 10) return { title: 'Explorador', color: '#8B5CF6', key: 'explorador' };
  if (level >= 5) return { title: 'Aventureiro', color: '#3B82F6', key: 'aventureiro' };
  return { title: 'Novato', color: '#22C55E', key: 'novato' };
}

const VIDEOS = {
  novato: require('../assets/characters/novato.mp4'),
  aventureiro: require('../assets/characters/aventureiro.mp4'),
  explorador: require('../assets/characters/explorador.mp4'),
  heroi: require('../assets/characters/heroi.mp4'),
  arquimago: require('../assets/characters/arquimago.mp4'),
};

const UI = {
  chest: require('../assets/ui/chest.png'),
  swords: require('../assets/ui/icon-swords.png'),
  scroll: require('../assets/ui/icon-scroll.png'),
  note: require('../assets/ui/icon-note.png'),
  compass: require('../assets/ui/compass.png'),
  flame: require('../assets/ui/icon-flame.png'),
  star: require('../assets/ui/icon-star.png'),
  badgeFrame: require('../assets/ui/badge-frame.png'),
};

const QUEST_ICONS = [UI.swords, UI.scroll, UI.note];

export default function HomeScreen() {
  const character = getCharacter(USER.level);
  const videoRef = useRef(null);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* HERO */}
        <View style={[styles.hero, { height: HERO_H + insets.top }]}>
          <Video
            ref={videoRef}
            source={VIDEOS[character.key]}
            style={{
              position: 'absolute',
              width: SCREEN_W,
              height: HERO_H + 80,
              top: -25,
              left: 0,
            }}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping
            isMuted
          />

          <View style={[styles.overlay, { paddingTop: insets.top + 8 }]}>
            {/* Top bar only at top */}
            <View style={styles.topBar}>
              <TouchableOpacity style={styles.circleBtn}>
                <Ionicons name="menu" size={22} color="#FFF" />
              </TouchableOpacity>
              <View style={styles.currencyRow}>
                <View style={styles.pill}>
                  <Text style={{ fontSize: 13 }}>🪙</Text>
                  <Text style={styles.pillText}>{USER.coins}</Text>
                </View>
                <View style={styles.pill}>
                  <Text style={{ fontSize: 12 }}>💎</Text>
                  <Text style={styles.pillText}>{USER.energy}</Text>
                </View>
                <TouchableOpacity style={styles.plusBtn}>
                  <Ionicons name="add" size={16} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Spacer — character occupies the middle */}
            <View style={{ flex: 1 }} />

            {/* Level + XP BELOW the character */}
            <View style={styles.levelBlock}>
              <Text style={styles.levelText}>LEVEL {USER.level}</Text>
              <Text style={[styles.classText, { color: character.color }]}>
                {character.title.toUpperCase()}
              </Text>
              <View style={styles.xpWrap}>
                <ProgressBar
                  progress={(USER.xp / USER.xpMax) * 100}
                  height={8}
                  color="#A78BFA"
                  bgColor="rgba(255,255,255,0.25)"
                />
              </View>
              <Text style={styles.xpLabel}>
                {USER.xp.toLocaleString('pt-PT')} / {USER.xpMax.toLocaleString('pt-PT')} XP
              </Text>
            </View>

            {/* Side badges — mid height */}
            <View style={styles.badgesAbsolute}>
              <View style={styles.badgeCol}>
                <View style={styles.badge}>
                  <Image source={UI.badgeFrame} style={styles.badgeFrame} resizeMode="stretch" />
                  <View style={styles.badgeContent}>
                    <Image source={UI.flame} style={styles.badgeFlame} resizeMode="contain" />
                    <Text style={styles.badgeNum}>{USER.streak}</Text>
                    <Text style={styles.badgeLbl} numberOfLines={1}>DIAS</Text>
                  </View>
                </View>
                <View style={[styles.badge, { marginTop: 10 }]}>
                  <Image source={UI.badgeFrame} style={styles.badgeFrame} resizeMode="stretch" />
                  <View style={styles.badgeContent}>
                    <Image source={UI.star} style={styles.badgeStar} resizeMode="contain" />
                    <Text style={styles.badgeNum}>{USER.multiplier}x</Text>
                    <Text style={styles.badgeLbl} numberOfLines={1}>MULTIPLICADOR</Text>
                  </View>
                </View>
              </View>
              <View style={styles.badgeCol}>
                <TouchableOpacity style={styles.circleBtn}>
                  <Ionicons name="pencil" size={14} color="#A78BFA" />
                </TouchableOpacity>
                <View style={[styles.banner, { marginTop: 10 }]}>
                  <Text style={{ fontSize: 18 }}>⚔️</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.sheet}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image source={UI.compass} style={{ width: 20, height: 20 }} resizeMode="contain" />
                <Text style={styles.cardTitle}>QUEST DO DIA</Text>
              </View>
              <Text style={styles.timer}>23h 18m restantes</Text>
            </View>

            {DAILY_QUESTS.map((q, i) => {
              const done = q.completed;
              const pct = (q.progress / q.total) * 100;
              return (
                <View key={q.id} style={styles.questRow}>
                  <View style={styles.qIcon}>
                    <Image source={QUEST_ICONS[i]} style={{ width: 24, height: 24 }} resizeMode="contain" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.qName, done && { color: 'rgba(255,255,255,0.4)' }]}>
                      {q.title}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                      <Text style={styles.qProg}>{q.progress}/{q.total}</Text>
                      <View style={{ flex: 1, maxWidth: 90 }}>
                        <ProgressBar
                          progress={pct}
                          height={4}
                          color={done ? '#22C55E' : '#8B5CF6'}
                          bgColor="rgba(255,255,255,0.08)"
                        />
                      </View>
                    </View>
                  </View>
                  {done ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                      <Text style={{ color: '#22C55E', fontSize: 12, fontWeight: '700' }}>+{q.xp} XP</Text>
                      <Ionicons name="checkmark-circle" size={15} color="#22C55E" />
                    </View>
                  ) : (
                    <Text style={{ color: '#D4AF37', fontSize: 12, fontWeight: '700' }}>+{q.xp} XP</Text>
                  )}
                </View>
              );
            })}
          </View>

          <View style={[styles.card, styles.chestCard]}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#D4AF37', fontSize: 12, fontWeight: '800', letterSpacing: 0.8, marginBottom: 4 }}>
                RECOMPENSA DO BAÚ
              </Text>
              <Text style={{ color: '#F5E6C8', fontSize: 13, fontWeight: '600', marginBottom: 10 }}>
                Alcança 2.000 XP
              </Text>
              <ProgressBar
                progress={(USER.xp / USER.xpMax) * 100}
                height={8}
                color="#D4AF37"
                bgColor="rgba(212,175,55,0.12)"
              />
              <Text style={{ color: 'rgba(212,175,55,0.6)', fontSize: 11, fontWeight: '600', marginTop: 5 }}>
                {USER.xp.toLocaleString('pt-PT')} / {USER.xpMax.toLocaleString('pt-PT')}
              </Text>
            </View>
            <View style={styles.chestBox}>
              <Image source={UI.chest} style={{ width: 64, height: 64 }} resizeMode="contain" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0D0B1A' },
  hero: {
    width: SCREEN_W,
    overflow: 'hidden',
    backgroundColor: '#1a0a3e',
  },
  overlay: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  circleBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    gap: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  pillText: { color: '#FFF', fontSize: 13, fontWeight: '700' },
  plusBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(139,92,246,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* LEVEL abaixo do personagem */
  levelBlock: {
    position: 'absolute',
    bottom: 55,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.85)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  classText: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    marginTop: 2,
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  xpWrap: { width: 200, marginBottom: 4, alignSelf: 'center' },
  xpLabel: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 11,
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  /* Badges laterais absolutos a meio */
  badgesAbsolute: {
    position: 'absolute',
    left: 14,
    right: 14,
    top: '38%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeCol: { alignItems: 'center' },
  badge: {
    width: 90,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeFrame: {
    position: 'absolute',
    width: 90,
    height: 108,
    top: 0,
    left: 0,
  },
  badgeContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 16,
    zIndex: 2,
  },
  badgeFlame: {
    width: 26,
    height: 26,
    marginBottom: 4,
  },
  badgeStar: {
    width: 22,
    height: 22,
    marginBottom: 4,
  },
  badgeNum: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: 2,
  },
  badgeLbl: {
    color: 'rgba(245,230,200,0.8)',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0,
  },
  banner: {
    width: 40,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(167,139,250,0.3)',
  },

  sheet: {
    backgroundColor: '#0D0B1A',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: '#16142D',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.15)',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardTitle: {
    color: '#F5E6C8',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
  timer: {
    color: 'rgba(245,230,200,0.4)',
    fontSize: 11,
    fontWeight: '600',
  },
  questRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  qIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(139,92,246,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(167,139,250,0.2)',
  },
  qName: {
    color: '#F5E6C8',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  qProg: {
    color: 'rgba(245,230,200,0.4)',
    fontSize: 11,
    fontWeight: '600',
    minWidth: 28,
  },
  chestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderColor: 'rgba(212,175,55,0.25)',
    backgroundColor: '#1A1628',
  },
  chestBox: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: 'rgba(212,175,55,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.3)',
  },
});
