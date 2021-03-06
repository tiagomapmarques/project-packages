"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PACKAGES = {
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
exports.getAllOfType = function (type) { return (Object.keys(exports.DEFAULT_PACKAGES).reduce(function (collection, key) { return (collection.concat((exports.DEFAULT_PACKAGES[key][type] || []))); }, []).slice()); };
