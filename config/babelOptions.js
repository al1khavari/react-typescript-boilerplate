module.exports = {
   presets: [
      [
         '@babel/preset-env',
         {
            targets: {
               esmodules: true,
            },
            modules: false,
         },
      ],
      '@babel/typescript',
      '@babel/react',
   ],
   plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      'babel-plugin-styled-components',
   ],
   // This is a feature of `babel-loader` for webpack (not Babel itself).
   // It enables caching results in ./node_modules/.cache/babel-loader/
   // directory for faster rebuilds.
   cacheDirectory: true,
   // See #6846 for context on why cacheCompression is disabled
   cacheCompression: false,
};