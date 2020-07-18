const expoPreset = require('jest-expo/jest-preset');
const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = Object.assign(expoPreset, jestPreset, {
  setupFiles: [...expoPreset.setupFiles, ...jestPreset.setupFiles],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each']
});
