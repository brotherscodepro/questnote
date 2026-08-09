import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notesData = [
  {
    id: "1",
    tag: "Ideia",
    title: "Sistema de Gamificação",
    time: "Hoje · 14:32",
    xp: "+5 XP",
    color: "#7c5cff",
  },
  {
    id: "2",
    tag: "Projeto",
    title: "Wireframes Mobile",
    time: "Hoje · 11:08",
    xp: "+5 XP",
    color: "#3b82f6",
  },
  {
    id: "3",
    tag: "Pessoal",
    title: "Hábitos Diários",
    time: "Ontem · 21:15",
    xp: "+5 XP",
    color: "#22c55e",
  },
  {
    id: "4",
    tag: "Estudo",
    title: "Design Patterns",
    time: "2 dias · 14:40",
    xp: "+5 XP",
    color: "#f59e0b",
  },
];

export default function NotesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.phoneHeader}>
        <Text style={styles.phoneHeaderText}>2. NOTAS (COLEÇÃO)</Text>
      </View>

      <Text style={styles.pageTitle}>AS MINHAS NOTAS</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#9ca3af" />
        <Text style={styles.searchText}>Pesquisar notas...</Text>
        <Ionicons name="options" size={16} color="#9ca3af" />
      </View>

      <View style={styles.filterRow}>
        {["Todas", "Ideias", "Projeto", "Pessoal", "Estudo"].map((item, idx) => (
          <View
            key={item}
            style={[styles.filterChip, idx === 0 && styles.filterChipActive]}
          >
            <Text
              style={[
                styles.filterChipText,
                idx === 0 && styles.filterChipTextActive,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.notesGrid}>
        {notesData.map((item) => (
          <View
            key={item.id}
            style={[styles.noteCard, { borderColor: item.color }]}
          >
            <View style={styles.noteCardTop}>
              <View style={[styles.noteTag, { backgroundColor: item.color }]}>
                <Text style={styles.noteTagText}>{item.tag}</Text>
              </View>
              <Ionicons name="bookmark-outline" size={16} color="#fff" />
            </View>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteTime}>{item.time}</Text>
            <Text style={styles.noteXp}>{item.xp}</Text>
          </View>
        ))}
      </View>

      <View style={styles.centerPlus}>
        <View style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#050814",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 16,
  },
  phoneHeader: {
    paddingBottom: 8,
  },
  phoneHeaderText: {
    color: "#8e8f9e",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  pageTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 12,
  },
  searchBar: {
    backgroundColor: "#10152a",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#22283f",
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  searchText: {
    color: "#9ca3af",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 13,
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#10152a",
    borderWidth: 1,
    borderColor: "#23293f",
  },
  filterChipActive: {
    backgroundColor: "#3a2f7a",
    borderColor: "#7c5cff",
  },
  filterChipText: {
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: "700",
  },
  filterChipTextActive: {
    color: "#fff",
  },
  notesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  noteCard: {
    width: "48%",
    minHeight: 160,
    backgroundColor: "#10152a",
    borderRadius: 18,
    borderWidth: 1,
    padding: 12,
  },
  noteCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  noteTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  noteTagText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
  },
  noteTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  noteTime: {
    color: "#9ca3af",
    fontSize: 12,
    marginBottom: 18,
  },
  noteXp: {
    color: "#ffd66b",
    fontSize: 12,
    fontWeight: "800",
    marginTop: "auto",
  },
  centerPlus: {
    alignItems: "center",
    marginTop: 16,
  },
  plusButton: {
    width: 54,
    height: 54,
    borderRadius: 999,
    backgroundColor: "#7c5cff",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
    marginTop: -3,
  },
});