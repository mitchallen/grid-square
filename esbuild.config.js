// esbuild.config.js
const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: false,
  outfile: './dist/grid-square.js',
  format: 'cjs', // changed to CommonJS for Node compatibility
  // platform 'node' (not the default 'browser') so dependencies resolve via
  // "main". Sibling @mitchallen packages point "browser" at a global-assigning
  // IIFE that exports nothing; bundling that yields an empty object and
  // coreGrid.create is undefined at runtime.
  platform: 'node',
  sourcemap: true,
  target: ['es2015'],
}).catch((e) => { console.error(e); process.exit(1); });
