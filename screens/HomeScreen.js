import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [xp, setXp] = React.useState(1840);
  const [level, setLevel] = React.useState(12);
  const [questDone, setQuestDone] = React.useState(false);

  const currentLevelXp = 2000;
  const progress = xp / currentLevelXp;

  const completeQuest = () => {
    if (questDone) return;
    setQuestDone(true);
    setXp((prev) => prev + 25);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>QUESTNOTE</Text>
          <Text style={styles.brandSub}>ORGANIZA A TUA VIDA.</Text>
          <Text style={styles.brandSub}>VIVE A TUA AVENTURA.</Text>
        </View>

        <View style={styles.headerRight}>
          <Ionicons name="sparkles" size={18} color="#ffd66b" />
          <Text style={styles.headerXp}>{xp} XP</Text>
        </View>
      </View>

      {/* Card conceito / sistema */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>CONCEITO</Text>
        <Text style={styles.infoText}>
          Cada ação do dia-a-dia faz o teu personagem crescer e o teu mundo
          evoluir.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.infoTitle}>SISTEMA</Text>

        <View style={styles.systemRow}>
          <Ionicons name="sparkles" size={16} color="#ffd66b" />
          <View style={styles.systemTextBox}>
            <Text style={styles.systemLabel}>XP</Text>
            <Text style={styles.systemSub}>Sobe de nível</Text>
          </View>
        </View>

        <View style={styles.systemRow}>
          <Ionicons name="ellipse" size={16} color="#a855f7" />
          <View style={styles.systemTextBox}>
            <Text style={styles.systemLabel}>MOEDAS</Text>
            <Text style={styles.systemSub}>Desbloqueia itens</Text>
          </View>
        </View>

        <View style={styles.systemRow}>
          <Ionicons name="flame" size={16} color="#f97316" />
          <View style={styles.systemTextBox}>
            <Text style={styles.systemLabel}>STREAK</Text>
            <Text style={styles.systemSub}>Multiplicador de XP</Text>
          </View>
        </View>

        <View style={styles.systemRow}>
          <Ionicons name="battery-charging" size={16} color="#22c55e" />
          <View style={styles.systemTextBox}>
            <Text style={styles.systemLabel}>ENERGIA</Text>
            <Text style={styles.systemSub}>Usa para focar</Text>
          </View>
        </View>
      </View>

      {/* Card nível e personagem */}
      <View style={styles.levelCard}>
        <View style={styles.levelHeaderRow}>
          <View>
            <Text style={styles.levelLabel}>Nível atual</Text>
            <Text style={styles.levelText}>Level {level}</Text>
          </View>
          <View style={styles.levelStatsBox}>
            <Text style={styles.levelStat}>14 dias</Text>
            <Text style={styles.levelStat}>1.3x streak</Text>
          </View>
        </View>

        <View style={styles.xpRow}>
          <View style={{ flex: 1 }}>
            <View style={styles.xpBarBg}>
              <View
                style={[
                  styles.xpBarFill,
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>
          </View>
          <Text style={styles.xpText}>
            {xp} / {currentLevelXp} XP
          </Text>
        </View>

        <View style={styles.characterBox}>
          <Text style={styles.characterEmoji}>🧝‍♂️</Text>
        </View>
      </View>

      {/* Quest do dia */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>QUEST DO DIA</Text>
          <Text style={styles.sectionSmall}>23h restantes</Text>
        </View>

        <View style={styles.questRow}>
          <Text style={styles.questIcon}>⚔️</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.questTitle}>Completar 3 tarefas</Text>
            <View style={styles.questBarBg}>
              <View style={[styles.questBarFill, { width: "33%" }]} />
            </View>
          </View>
          <Text style={styles.questReward}>+40 XP</Text>
        </View>

        <View style={styles.questRow}>
          <Text style={styles.questIcon}>📘</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.questTitle}>Continuar um projeto</Text>
            <View style={styles.questBarBg}>
              <View style={[styles.questBarFill, { width: "0%" }]} />
            </View>
          </View>
          <Text style={styles.questReward}>+25 XP</Text>
        </View>

        <View style={styles.questRow}>
          <Text style={styles.questIcon}>📝</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.questTitle}>Criar 1 nota nova</Text>
            <View style={styles.questBarBg}>
              <View style={[styles.questBarFill, { width: "100%" }]} />
            </View>
          </View>
          <Text style={styles.questReward}>+15 XP</Text>
        </View>

        <Pressable style={styles.button} onPress={completeQuest}>
          <Text style={styles.buttonText}>
            {questDone ? "Quest concluída" : "Concluir quest"}
          </Text>
        </Pressable>
      </View>

      {/* Baú de recompensa */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>RECOMPENSA DO BAÚ</Text>
          <Text style={styles.sectionSmall}>Alcança {currentLevelXp} XP</Text>
        </View>
        <View style={styles.chestRow}>
          <Text style={styles.chestEmoji}>🧰</Text>
          <View style={{ flex: 1 }}>
            <View style={styles.chestProgressBg}>
              <View
                style={[
                  styles.chestProgressFill,
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.chestText}>
              {xp} / {currentLevelXp} XP
            </Text>
          </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  brand: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1,
  },
  brandSub: {
    color: "#c4b5fd",
    fontSize: 11,
    fontWeight: "700",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerXp: {
    color: "#ffd66b",
    fontWeight: "800",
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: "#0b0f1f",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1d2340",
    marginBottom: 16,
  },
  infoTitle: {
    color: "#c4b5fd",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 6,
  },
  infoText: {
    color: "#cbd5e1",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#1f2541",
    marginVertical: 10,
  },
  systemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  systemTextBox: {
    marginLeft: 10,
  },
  systemLabel: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  systemSub: {
    color: "#9ca3af",
    fontSize: 11,
  },
  levelCard: {
    backgroundColor: "#10152a",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 16,
    marginBottom: 16,
  },
  levelHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  levelLabel: {
    color: "#cbd5e1",
    fontSize: 12,
  },
  levelText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 4,
  },
  levelStatsBox: {
    alignItems: "flex-end",
  },
  levelStat: {
    color: "#9ca3af",
    fontSize: 11,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },
  xpBarBg: {
    height: 10,
    backgroundColor: "#1c2640",
    borderRadius: 999,
    overflow: "hidden",
  },
  xpBarFill: {
    height: "100%",
    backgroundColor: "#ffd66b",
    borderRadius: 999,
  },
  xpText: {
    color: "#cbd5e1",
    fontSize: 11,
    fontWeight: "700",
  },
  characterBox: {
    marginTop: 16,
    borderRadius: 18,
    backgroundColor: "#18203b",
    borderWidth: 1,
    borderColor: "#2d365b",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  characterEmoji: {
    fontSize: 64,
  },
  sectionCard: {
    backgroundColor: "#10152a",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#23293f",
    padding: 16,
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 14,
  },
  sectionSmall: {
    color: "#9ca3af",
    fontSize: 11,
  },
  questRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  questIcon: {
    fontSize: 18,
    width: 24,
  },
  questTitle: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: 6,
  },
  questBarBg: {
    height: 8,
    backgroundColor: "#1c2640",
    borderRadius: 999,
    overflow: "hidden",
  },
  questBarFill: {
    height: "100%",
    backgroundColor: "#7c5cff",
    borderRadius: 999,
  },
  questReward: {
    color: "#ffd66b",
    fontWeight: "800",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#7c5cff",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },
  chestRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  chestEmoji: {
    fontSize: 34,
  },
  chestProgressBg: {
    height: 10,
    backgroundColor: "#1c2640",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 8,
  },
  chestProgressFill: {
    height: "100%",
    backgroundColor: "#ffd66b",
    borderRadius: 999,
  },
  chestText: {
    color: "#cbd5e1",
    fontSize: 11,
  },
});