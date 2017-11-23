
type ProjectModuleKey = 'literals' | 'regex';
interface ProjectModule {
  literals: string[];
  regex: string[];
}

type ProjectModulesKey = 'PROJECT' | 'WEBPACK' | 'BABEL' | 'TYPESCRIPT' | 'STYLE' | 'TESTS';
interface ProjectModules {
  PROJECT: ProjectModule;
  WEBPACK: ProjectModule;
  BABEL: ProjectModule;
  TYPESCRIPT: ProjectModule;
  STYLE: ProjectModule;
  TESTS: ProjectModule;
}

declare module 'project-packages' {
  type ProjectModuleKey = 'literals' | 'regex';
  interface ProjectModule {
    literals: string[];
    regex: string[];
  }

  type ProjectModulesKey = 'PROJECT' | 'WEBPACK' | 'BABEL' | 'TYPESCRIPT' | 'STYLE' | 'TESTS';
  interface ProjectModules {
    PROJECT: ProjectModule;
    WEBPACK: ProjectModule;
    BABEL: ProjectModule;
    TYPESCRIPT: ProjectModule;
    STYLE: ProjectModule;
    TESTS: ProjectModule;
  }

  function getAllOfType(type: ProjectModuleKey): string[];
}
