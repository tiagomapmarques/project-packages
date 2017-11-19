
export type ProjectModuleKey = 'literals' | 'regex';
export interface ProjectModule {
  literals: string[];
  regex: string[];
}

export type ProjectModulesKey = 'PROJECT' | 'WEBPACK' | 'BABEL' | 'TYPESCRIPT' | 'STYLE' | 'TESTS';
export interface ProjectModules {
  PROJECT: ProjectModule;
  WEBPACK: ProjectModule;
  BABEL: ProjectModule;
  TYPESCRIPT: ProjectModule;
  STYLE: ProjectModule;
  TESTS: ProjectModule;
}
