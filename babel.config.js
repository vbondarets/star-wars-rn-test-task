module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {},
      },
    ],
  ],
}
