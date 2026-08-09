import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const questsData = [
  {
    id: "1",
    title: "Enviar relatório",
    due: "Hoje",
    xp: "+25 XP",
    status: "ALTA",
    progress: 0.7,
    color: "#ef4444",
  },
  {
    id: "2",
    title: "Comprar prenda",
    due: "Amanhã",
    xp: "+15 XP",
    status: "MÉDIA",
    progress: 0.2,
    color: "#f59e0b",
  },
  {
    id: "3",
    title: "Ligar ao dentista",
    due: "Sexta",
    xp: "+10 XP",
    status: "BAIXA",
    progress: 0.5,
    color: "#22c55e",
  },
  {
    id: "4",
    title: "Atualizar CV",
    due: "Hoje",
    xp: "+20 XP",
    status: "BAIXA",
    progress: 0.0,
    color: "#22c55e",
  },
  {
    id: "5",
    title: "Pagar fatura",
    due: "Hoje",
    xp: "+20 XP",
    status: "BAIXA",
    progress: 0.0,
    color: "#22c55e",
  },
];

export default function QuestsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.phoneHeader}>
        <Text style={styles.phoneHeaderText}>4. TAREFAS (QUESTS)</Text>
      </View>

      <Text style={styles.pageTitle}>AS MINHAS QUESTS</Text>

      <View style={styles.statsRow}>
        <View style={styles.questStatBox}>
          <Text style={styles.questStatNum}>3</Text>
          <Text style={styles.questStatLabel}>PENDENTES</Text>
        </View>
        <View style={styles.questStatBox}>
          <Text style={styles.questStatNum}>1</Text>
          <Text style={styles.questStatLabel}>ATRASADA</Text>
        </View>
        <View style={styles.questStatBox}>
          <Text style={styles.questStatNum}>5</Text>
          <Text style={styles.questStatLabel}>CONCLUÍDAS</Text>
        </View>
      </View>

      <Text style={styles.orderText}>Ordenar: Prioridade</Text>

      {questsData.map((item) => (
        <View key={item.id} style={styles.questCard}>
          <View style={styles.questCardTop}>
            <Text style={styles.questCardTitle}>{item.title}</Text>
            <View style={[styles.priorityBadge, { borderColor: item.color }]}>
              <Text
                style={[styles.priorityBadgeText, { color: item.color }]}
              >
                {item.status}
              </Text>
            </View>
          </View>
          <Text style={styles.questCardDue}>{item.due}</Text>
          <View style={styles.questCardBarBg}>
            <View
              style={[
                styles.questCardBarFill,
                {
                  width: `${item.progress * 100}%`,
                  backgroundColor: item.color,
                },
              ]}
            />
          </View>
          <Text style={styles.questCardXp}>{item.xp}</Text>
        </View>
      ))}
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
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  questStatBox: {
    flex: 1,
    backgroundColor: "#10152a",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#23293f",
  },
  questStatNum: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  questStatLabel: {
    color: "#9ca3af",
    fontSize: 10,
    marginTop: 4,
    fontWeight: "700",
  },
  orderText: {
    color: "#cbd5e1",
    marginBottom: 10,
  },
  questCard: {
    marginBottom: 10,
    backgroundColor: "#10152a",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 14,
  },
  questCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questCardTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 15,
  },
  priorityBadge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  priorityBadgeText: {
    fontWeight: "800",
    fontSize: 10,
  },
  questCardDue: {
    color: "#9ca3af",
    marginTop: 4,
    marginBottom: 10,
    fontSize: 12,
  },
  questCardBarBg: {
    height: 8,
    backgroundColor: "#1c2640",
    borderRadius: 999,
    overflow: "hidden",
  },
  questCardBarFill: {
    height: "100%",
    borderRadius: 999,
  },
  questCardXp: {
    color: "#ffd66b",
    marginTop: 10,
    fontWeight: "800",
    fontSize: 12,
  },
});