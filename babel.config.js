module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
    env: {
      development: {
        plugins: [
          '@babel/plugin-transform-react-jsx-source',
          ['module-resolver', {
            root: ['./src'],
            alias: {
              'react-native-gesture-handler': './node_modules/react-native-gesture-handler'
            }
          }]
        ]
      }
    }
  };
};