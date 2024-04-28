module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react-native'],
  rules: {
    'no-trailing-spaces': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'on',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
