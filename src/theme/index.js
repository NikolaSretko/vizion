import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e0f2ff',
    100: '#b8dcff',
    200: '#85c5ff',
    300: '#4eadff',
    400: '#1496ff',
    500: '#0084ff',
    600: '#0068d6',
    700: '#004eae',
    800: '#003585',
    900: '#001d5c',
  },
  accent: {
    50: '#ffeef2',
    100: '#ffccd8',
    200: '#ff9fb3',
    300: '#ff708e',
    400: '#ff4169',
    500: '#ff1a4b',
    600: '#e5003c',
    700: '#b20030',
    800: '#800022',
    900: '#4d0014',
  },
  darkBg: {
    900: '#0a0b11',
    800: '#121319',
    700: '#1a1b22',
    600: '#22242c',
    500: '#2a2d36',
    400: '#383b47',
    300: '#4c505f',
    200: '#686c7f',
    100: '#9195a6',
    50: '#c2c5d1',
  },
};

const fonts = {
  heading: '"Montserrat", sans-serif',
  body: '"Inter", "Open Sans", sans-serif',
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'darkBg.800' : 'gray.50',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
      _focus: {
        boxShadow: 'none',
      },
    },
    variants: {
      primary: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
          _disabled: {
            bg: 'brand.500',
          },
        },
        _active: {
          bg: 'brand.700',
        },
      },
      secondary: {
        bg: 'accent.500',
        color: 'white',
        _hover: {
          bg: 'accent.600',
          _disabled: {
            bg: 'accent.500',
          },
        },
        _active: {
          bg: 'accent.700',
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
        },
      },
      ghost: {
        color: 'brand.500',
        _hover: {
          bg: 'rgba(0, 132, 255, 0.1)',
        },
      },
      glassmorphic: {
        bg: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        border: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        _hover: {
          bg: 'rgba(255, 255, 255, 0.2)',
        },
      },
      glassmorphicDark: {
        bg: 'rgba(10, 11, 17, 0.7)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        border: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        _hover: {
          bg: 'rgba(10, 11, 17, 0.8)',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'bold',
    },
  },
  Card: {
    baseStyle: (props) => ({
      container: {
        bg: props.colorMode === 'light' ? 'darkBg.700' : 'white',
        borderRadius: 'xl',
        overflow: 'hidden',
        boxShadow: 'xl',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: '2xl',
        },
      },
    }),
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles,
  config,
});

export default theme;