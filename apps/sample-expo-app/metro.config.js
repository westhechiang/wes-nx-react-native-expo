const { withNxMetro } = require('nx-react-native-expo');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const defaultConfigCopy = { ...defaultConfig };
const withNXMetroConfig = withNxMetro(defaultConfigCopy);
// withNXMetroConfig.transformer.enableBabelRCLookup = true;
// withNXMetroConfig.resolver.resolveRequest = null;
withNXMetroConfig.watchFolders = [];

module.exports = withNXMetroConfig;
