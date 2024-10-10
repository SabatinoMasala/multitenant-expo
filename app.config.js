if (!process.env.TENANT) {
  throw new Error('TENANT environment variable is required');
}

const config = require('./configs/' + process.env.TENANT + '.js');

const version = '1.0.0';

module.exports = {
  name: config.name,
  slug: config.slug,
  version,
  orientation: 'portrait',
  icon: config.icon,
  scheme: config.slug,
  userInterfaceStyle: 'automatic',
  splash: config.splash,
  assetBundlePatterns: [
    'assets/_global/**/*',
    `assets/${config.slug}/**/*`,
  ],
  ios: {
    bundleIdentifier: config.bundleIdentifier,
    supportsTablet: true
  },
  android: {
    adaptiveIcon: config.adaptiveIcon,
  },
  plugins: [
    'expo-router'
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    ...config,
  }
}
