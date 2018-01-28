import { ProjectModules, ProjectModulesKey, ProjectModuleKey } from './types';

export const DEFAULT_PACKAGES: ProjectModules = {
  PROJECT: {
    literals: ['ncp', 'path', 'rimraf'],
    regex: ['^project-packages(-filters)?$'],
  },
  WEBPACK: {
    literals: ['webpack', 'prerender-spa-plugin'],
    regex: ['^webpack-.+', '.+-webpack-plugin', '.+-loader$'],
  },
  BABEL: {
    literals: ['eslint'],
    regex: ['^babel-.+', '^eslint-.+'],
  },
  TYPESCRIPT: {
    literals: ['typescript'],
    regex: ['^@types/.+', '^ts-.+', '^tslint-.+'],
  },
  STYLE: {
    literals: ['node-sass', 'stylelint'],
    regex: ['^stylelint-.+'],
  },
  TESTS: {
    literals: ['jest'],
    regex: ['^jest-.+', '.+-jest$'],
  },
};

export const getAllOfType = (type: ProjectModuleKey): string[] => ([
  ...Object.keys(DEFAULT_PACKAGES).reduce((collection, key: ProjectModulesKey) => ([
    ...collection,
    ...(DEFAULT_PACKAGES[key][type] || []),
  ]), []),
]);
