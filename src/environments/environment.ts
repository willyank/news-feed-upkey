export const environment = {
  version: require('../../package.json').version,
  versionDate: new Date().toLocaleString(),
  authorCommit: require('../../package.json').authorCommit,
  envName: 'dev',
  production: false,
  useMock: true,
};
