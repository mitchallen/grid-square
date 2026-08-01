// esbuild.config.js
const { build } = require('esbuild');

// Resolve dependencies through "main", never "browser". Sibling @mitchallen
// packages point their "browser" field at a global-assigning IIFE that exports
// nothing, so bundling that yields an empty module and coreGrid.create is
// undefined at runtime.
const shared = {
  entryPoints: ['./src/index.js'],
  bundle: true,
  mainFields: ['main'],
  sourcemap: true,
  target: ['es2015'],
};

const builds = [
  // CommonJS entry point; package.json "main" resolves here.
  {
    ...shared,
    outfile: './dist/grid-square.js',
    format: 'cjs',
    platform: 'node',
    minify: false,
  },
  // Minified browser bundle, exposing window.MitchAllen.GridSquare. This is the
  // file the README's jsDelivr link serves, so it has to be built here rather
  // than left to drift.
  {
    ...shared,
    outfile: './dist/grid-square.min.js',
    format: 'iife',
    globalName: 'MitchAllen.GridSquare',
    platform: 'browser',
    minify: true,
  },
];

Promise.all(builds.map((options) => build(options))).catch((e) => {
  console.error(e);
  process.exit(1);
});
