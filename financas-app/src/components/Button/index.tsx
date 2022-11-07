import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import styles from './styles';
import { variants } from './variants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
  style?: TouchableOpacityProps['style'];
}

export function Button({
  onPress,
  title,
  isLoading,
  disabled,
  variant = 'primary',
  style,
}: ButtonProps) {

  const buttonVariant = variants[variant];

  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, buttonStyle.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.content}>
          <Text style={[styles.title, { color: buttonStyle.title.color }]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}