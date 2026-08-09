import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const achievementsData = [
  { id: "1", title: "Escriba", desc: "10 notas", icon: "book", color: "#f59e0b" },
  { id: "2", title: "Em Chamas", desc: "7 dias", icon: "flame", color: "#ef4444" },
  { id: "3", title: "Guerreiro", desc: "3 níveis", icon: "shield", color: "#7c5cff" },
  { id: "4", title: "Guardião", desc: "15 tarefas", icon: "trophy", color: "#22c55e" },
];

const themesData = [
  { id: "1", title: "Escuro", locked: false, color: "#7c5cff" },
  { id: "2", title: "Oceano", locked: false, color: "#3b82f6" },
  { id: "3", title: "Floresta", locked: false, color: "#22c55e" },
  { id: "4", title: "Galáxia", locked: true, color: "#a855f7" },
];

const skillsData = [
  { id: "1", title: "Foco", level: "2/5", color: "#22c55e" },
  { id: "2", title: "Organização", level: "3/5", color: "#7c5cff" },
  { id: "3", title: "Disciplina", level: "1/5", color: "#f59e0b" },
  { id: "4", title: "Produtividade", level: "0/5", color: "#3b82f6" },
  { id: "5", title: "Criatividade", level: "0/5", color: "#ec4899" },
  { id: "6", title: "Liderança", level: "0/5", color: "#06b6d4" },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.phoneHeader}>
        <Text style={styles.phoneHeaderText}>5. PERFIL (HERÓI)</Text>
      </View>

      {/* Card principal do herói */}
      <View style={styles.profileHeroCard}>
        <Text style={styles.profileTitle}>O TEU PERFIL</Text>
        <Text style={styles.profileAvatar}>🧑‍🚀</Text>
        <Text style={styles.profileClass}>Explorador</Text>
        <Text style={styles.profileSub}>Aventureiro desde Ago 2024</Text>
        <Text style={styles.profileXp}>1.840 / 2.000 XP</Text>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsGrid}>
        {[
          ["42", "NOTAS"],
          ["18", "LISTAS"],
          ["87", "TAREFAS"],
          ["14", "STREAK"],
          ["2.340", "XP TOTAL"],
          ["9 / 24", "CONQUISTAS"],
        ].map(([value, label]) => (
          <View key={label} style={styles.profileMiniStat}>
            <Text style={styles.profileMiniStatValue}>{value}</Text>
            <Text style={styles.profileMiniStatLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {/* Conquistas */}
      <Text style={styles.sectionTitle}>CONQUISTAS</Text>
      <View style={styles.achievementsRow}>
        {achievementsData.map((item) => (
          <View key={item.id} style={styles.achievementBox}>
            <Ionicons name={item.icon} size={18} color={item.color} />
            <Text style={styles.achievementTitle}>{item.title}</Text>
            <Text style={styles.achievementDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>

      {/* Temas */}
      <Text style={styles.sectionTitle}>TEMAS DESBLOQUEADOS</Text>
      <View style={styles.themesGrid}>
        {themesData.map((item) => (
          <View
            key={item.id}
            style={[styles.themeBox, { borderColor: item.color }]}
          >
            <Text style={styles.themeTitle}>{item.title}</Text>
            <Text style={styles.themeLock}>{item.locked ? "🔒" : "✓"}</Text>
          </View>
        ))}
      </View>

      {/* Habilidades */}
      <Text style={styles.sectionTitle}>HABILIDADES</Text>
      <View style={styles.skillsGrid}>
        {skillsData.map((item) => (
          <View key={item.id} style={styles.skillBox}>
            <View
              style={[styles.skillDot, { backgroundColor: item.color }]}
            />
            <Text style={styles.skillTitle}>{item.title}</Text>
            <Text style={styles.skillLevel}>{item.level}</Text>
          </View>
        ))}
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
  profileHeroCard: {
    backgroundColor: "#10152a",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 18,
    alignItems: "center",
    marginBottom: 12,
  },
  profileTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },
  profileAvatar: {
    fontSize: 58,
    marginVertical: 6,
  },
  profileClass: {
    color: "#ffd66b",
    fontSize: 16,
    fontWeight: "900",
  },
  profileSub: {
    color: "#cbd5e1",
    marginTop: 4,
    fontSize: 12,
  },
  profileXp: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "800",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },
  profileMiniStat: {
    width: "48%",
    backgroundColor: "#10152a",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#23293f",
  },
  profileMiniStatValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  profileMiniStatLabel: {
    color: "#9ca3af",
    marginTop: 4,
    fontSize: 10,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#c4b5fd",
    fontWeight: "900",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 8,
  },
  achievementsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },
  achievementBox: {
    width: "48%",
    backgroundColor: "#10152a",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 12,
  },
  achievementTitle: {
    color: "#fff",
    fontWeight: "800",
    marginTop: 8,
  },
  achievementDesc: {
    color: "#9ca3af",
    marginTop: 2,
    fontSize: 12,
  },
  themesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },
  themeBox: {
    width: "48%",
    backgroundColor: "#10152a",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    justifyContent: "space-between",
    minHeight: 82,
  },
  themeTitle: {
    color: "#fff",
    fontWeight: "800",
  },
  themeLock: {
    marginTop: 18,
    fontSize: 18,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillBox: {
    width: "31%",
    backgroundColor: "#10152a",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#23293f",
    alignItems: "center",
  },
  skillDot: {
    width: 14,
    height: 14,
    borderRadius: 999,
    marginBottom: 8,
  },
  skillTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
  },
  skillLevel: {
    color: "#9ca3af",
    marginTop: 4,
    fontSize: 10,
  },
});