import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NOTES, NOTE_CATEGORIES } from '../constants/data';

const { width: SCREEN_W } = Dimensions.get('window');
const H_PAD = 16;
const GAP = 12;
const CARD_W = (SCREEN_W - H_PAD * 2 - GAP) / 2;
const ART_H = CARD_W * 0.95;

const CATEGORY_META = {
  Ideia: {
    color: '#C4B5FD',
    artBg: '#2A1F4D',
    pillBg: 'rgba(139,92,246,0.35)',
    label: 'Ideia',
  },
  Projeto: {
    color: '#FCD34D',
    artBg: '#2A2418',
    pillBg: 'rgba(245,158,11,0.35)',
    label: 'Projeto',
  },
  Pessoal: {
    color: '#6EE7B7',
    artBg: '#1A2E24',
    pillBg: 'rgba(16,185,129,0.35)',
    label: 'Pessoal',
  },
  Estudo: {
    color: '#F9A8D4',
    artBg: '#2E1A2E',
    pillBg: 'rgba(236,72,153,0.35)',
    label: 'Estudo',
  },
};

const NOTE_ART = {
  Ideia: require('../assets/ui/note-ideia.png'),
  Projeto: require('../assets/ui/note-projeto.png'),
  Pessoal: require('../assets/ui/note-pessoal.png'),
  Estudo: require('../assets/ui/note-estudo.png'),
};

function PulsingArt({ category }) {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1.04,
            duration: 1400,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scale, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.85,
            duration: 1400,
            useNativeDriver: true,
          }),
        ]),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [scale, opacity]);

  return (
    <Animated.Image
      source={NOTE_ART[category] || NOTE_ART.Ideia}
      style={[
        styles.artImg,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
      resizeMode="contain"
    />
  );
}

export default function NotesScreen() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredNotes = NOTES.filter((note) => {
    const matchCategory =
      activeCategory === 'all' ||
      note.category.toLowerCase() === activeCategory ||
      (activeCategory === 'ideia' && note.category === 'Ideia');
    const matchSearch = note.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const renderNote = ({ item }) => {
    const meta = CATEGORY_META[item.category] || CATEGORY_META.Ideia;
    return (
      <TouchableOpacity style={styles.noteCard} activeOpacity={0.85}>
        <View style={[styles.artBox, { backgroundColor: meta.artBg }]}>
          <PulsingArt category={item.category} />
          <View style={[styles.catPill, { backgroundColor: meta.pillBg }]}>
            <Text style={[styles.catPillText, { color: meta.color }]}>{meta.label}</Text>
          </View>
        </View>

        <View style={styles.noteBody}>
          <Text style={styles.noteTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.noteFooter}>
            <Text style={styles.noteDate} numberOfLines={1}>
              {item.date}
            </Text>
            <Text style={styles.noteXp}>+{item.xp} XP</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color="#E8DCC8" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AS MINHAS NOTAS</Text>
        <View style={{ width: 38 }} />
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={16} color="rgba(232,220,200,0.4)" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar notas..."
            placeholderTextColor="rgba(232,220,200,0.35)"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={18} color="#E8DCC8" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContent}
        style={styles.categories}
      >
        {NOTE_CATEGORIES.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setActiveCategory(cat.id)}
              activeOpacity={0.8}
              style={{ marginRight: 8 }}
            >
              <View
                style={{
                  height: 40,
                  width: 88,
                  borderRadius: 20,
                  backgroundColor: active ? '#7C3AED' : 'rgba(255,255,255,0.05)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: active ? '#FFFFFF' : 'rgba(232,220,200,0.5)',
                    fontSize: 13,
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  {cat.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.metaRow}>
        <Text style={styles.countText}>
          {filteredNotes.length} notas encontradas
        </Text>
        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.sortText}>Mais recentes</Text>
          <Ionicons name="chevron-down" size={14} color="rgba(232,220,200,0.45)" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderNote}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0A14',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  backBtn: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#E8DCC8',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H_PAD,
    gap: 10,
    marginTop: 2,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 22,
    paddingHorizontal: 14,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: '#E8DCC8',
    fontSize: 13,
    paddingVertical: 0,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
  },
  categories: {
    marginTop: 12,
    flexGrow: 0,
  },
  categoriesContent: {
    paddingHorizontal: H_PAD,
    gap: 8,
    alignItems: 'center',
    paddingVertical: 4,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: '#6D28D9',
    borderColor: '#6D28D9',
  },
  chipText: {
    color: 'rgba(232,220,200,0.5)',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 17,
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: H_PAD,
    marginTop: 14,
    marginBottom: 10,
  },
  countText: {
    color: 'rgba(232,220,200,0.35)',
    fontSize: 11,
    fontWeight: '600',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  sortText: {
    color: 'rgba(232,220,200,0.45)',
    fontSize: 11,
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: H_PAD,
    paddingBottom: 100,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GAP,
  },
  noteCard: {
    width: CARD_W,
    backgroundColor: '#14122A',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  artBox: {
    width: '100%',
    height: ART_H,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  artImg: {
    width: CARD_W * 0.98,
    height: CARD_W * 0.98,
  },
  catPill: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    zIndex: 5,
  },
  catPillText: {
    fontSize: 10,
    fontWeight: '700',
  },
  noteBody: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
  },
  noteTitle: {
    color: '#E8DCC8',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 17,
  },
  noteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteDate: {
    color: 'rgba(232,220,200,0.35)',
    fontSize: 10,
    fontWeight: '500',
    flex: 1,
    marginRight: 4,
  },
  noteXp: {
    color: '#A78BFA',
    fontSize: 11,
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    bottom: 22,
    alignSelf: 'center',
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
});
