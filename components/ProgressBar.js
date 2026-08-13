import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, RADIUS } from '../constants/theme';

export default function ProgressBar({ progress, height = 6, color = COLORS.primary, bgColor = COLORS.xpBarBg }) {
  const clamped = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={[styles.container, { height, backgroundColor: bgColor }]}>
      <View
        style={[
          styles.fill,
          {
            width: `${clamped}%`,
            backgroundColor: color,
            height,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: RADIUS.full,
  },
});
