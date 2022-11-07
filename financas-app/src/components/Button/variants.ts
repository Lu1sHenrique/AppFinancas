import colors from '../../styles/colors';

interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: colors.green,
    },
    title: {
      color: colors.white,
    },
  },
  disabled: {
    button: {
      backgroundColor: colors.gray,
    },
    title: {
      color: colors.white,
    },
  },
};
const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: colors.green,
      borderWidth: 2,
      borderColor: colors.green
    },
    title: {
      color: colors.white,
    },
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.green,
    },
    title: {
      color: colors.gray,
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
};
