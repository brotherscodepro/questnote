import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function XPBadge({ xp, size = 'sm' }) {
  return (
    <View style={[styles.badge, size === 'lg' && styles.badgeLg]}>
      <Text style={[styles.text, size === 'lg' && styles.textLg]}>+{xp} XP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'rgba(139, 92, 246, 0.25)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  badgeLg: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },
  text: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
  },
  textLg: {
    fontSize: 14,
  },
});
