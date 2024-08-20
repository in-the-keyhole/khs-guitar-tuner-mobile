const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    'react-native-gesture-handler': __dirname + '/node_modules/react-native-gesture-handler',
  };

  return config;
})();