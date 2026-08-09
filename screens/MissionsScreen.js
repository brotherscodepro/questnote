import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const missionsData = [
  {
    id: "1",
    title: "Supermercado",
    progress: "5 / 8 itens",
    reward: "+25 XP",
    icon: "cart",
    color: "#22c55e",
  },
  {
    id: "2",
    title: "Projeto App",
    progress: "4 / 10 tarefas",
    reward: "+60 XP",
    icon: "laptop",
    color: "#7c5cff",
  },
  {
    id: "3",
    title: "Viagem Lisboa",
    progress: "2 / 7 passos",
    reward: "+40 XP",
    icon: "airplane",
    color: "#f59e0b",
  },
];

export default function MissionsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.phoneHeader}>
        <Text style={styles.phoneHeaderText}>3. LISTAS (MISSÕES)</Text>
      </View>

      <Text style={styles.pageTitle}>AS MINHAS MISSÕES</Text>

      <View style={styles.topTabsRow}>
        {["Ativas", "Completas", "Recorrentes"].map((item, idx) => (
          <View
            key={item}
            style={[styles.topTab, idx === 0 && styles.topTabActive]}
          >
            <Text
              style={[
                styles.topTabText,
                idx === 0 && styles.topTabTextActive,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>

      {missionsData.map((item) => (
        <View key={item.id} style={styles.missionCard}>
          <View style={styles.missionLeft}>
            <View
              style={[styles.missionIconBox, { borderColor: item.color }]}
            >
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.missionTitle}>{item.title}</Text>
              <Text style={styles.missionProgress}>{item.progress}</Text>
              <View style={styles.missionRewardRow}>
                <Text style={styles.rewardLabel}>RECOMPENSA</Text>
                <Text style={styles.rewardValue}>{item.reward}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.addNewBox}>
        <Text style={styles.addNewText}>+ Criar nova missão</Text>
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
  topTabsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  topTab: {
    backgroundColor: "#10152a",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#23293f",
  },
  topTabActive: {
    backgroundColor: "#3a2f7a",
    borderColor: "#7c5cff",
  },
  topTabText: {
    color: "#cbd5e1",
    fontWeight: "700",
    fontSize: 12,
  },
  topTabTextActive: {
    color: "#fff",
  },
  missionCard: {
    marginBottom: 12,
    backgroundColor: "#10152a",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 14,
  },
  missionLeft: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  missionIconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c1326",
  },
  missionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  missionProgress: {
    color: "#cbd5e1",
    marginTop: 2,
    fontSize: 12,
  },
  missionRewardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rewardLabel: {
    color: "#9ca3af",
    fontSize: 10,
    fontWeight: "700",
  },
  rewardValue: {
    color: "#ffd66b",
    fontSize: 12,
    fontWeight: "800",
  },
  addNewBox: {
    marginTop: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#343a54",
    borderStyle: "dashed",
    paddingVertical: 18,
    alignItems: "center",
  },
  addNewText: {
    color: "#c4b5fd",
    fontWeight: "700",
  },
});