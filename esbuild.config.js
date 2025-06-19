// esbuild.config.js
const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: false,
  outfile: './dist/grid-square.js',
  format: 'cjs', // changed to CommonJS for Node compatibility
  sourcemap: true,
  target: ['es2015'],
}).catch((e) => { console.error(e); process.exit(1); });
