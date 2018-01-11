import * as jsProjectPackages from '../lib';
import * as tsProjectPackages from './';

describe('project-packages', () => {
  const testData = [
    {
      name: 'typescript',
      importedModule: tsProjectPackages,
    },
    {
      name: 'javascript',
      importedModule: jsProjectPackages,
    },
  ];

  const testProjectPackages = ({ name, importedModule }) => {
    describe(`on ${name}`, () => {
      describe('#DEFAULT_PACKAGES', () => {
        const keys = ['PROJECT', 'WEBPACK', 'BABEL', 'TYPESCRIPT', 'STYLE', 'TESTS'];

        it('has the correct keys', () => {
          expect(Object.keys(importedModule.DEFAULT_PACKAGES)).toEqual(keys);
        });
      });

      describe('#getAllOfType', () => {
        const literals = ['ncp', 'path', 'rimraf', 'webpack', 'eslint', 'typescript', 'node-sass', 'stylelint', 'jest'];
        const regex = ['^project-packages(-filters)?$', '^webpack-.+', '.+-webpack-plugin', '.+-loader$', '^babel-.+', '^eslint-.+', '^@types/.+', '^ts-.+', '^tslint-.+', '^stylelint-.+', '^jest-.+', '.+-jest$'];

        it('returns all the literals', () => {
          expect(importedModule.getAllOfType('literals')).toEqual(literals);
        });

        it('returns all the regex', () => {
          expect(importedModule.getAllOfType('regex')).toEqual(regex);
        });

        it('returns nothing when an unknown string is given', () => {
          expect((importedModule.getAllOfType as Function)('random-string')).toHaveLength(0);
        });
      });
    });
  };

  testData.forEach(testProjectPackages);
});
