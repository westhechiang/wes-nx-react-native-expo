const { withNxMetro } = require('nx-react-native-expo');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const defaultConfigCopy = { ...defaultConfig };
const withNXMetroConfig = withNxMetro(defaultConfig);
withNXMetroConfig.transformer.enableBabelRCLookup = true;

module.exports = withNXMetroConfig;
