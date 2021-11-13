module.exports = [
   {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
   },
   {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
   },
   {
      test: /\.svg$/,
      use: {
         loader: 'svg-url-loader',
         options: {
            encoding: 'base64',
         },
      },
   },
   {
      test: /\.svgr$/,
      use: [
         'babel-loader',
      ],
   },
   {
      test: /\.(png|jpg|gif)$/i,
      use: [
         {
            loader: 'url-loader',
            options: {
               limit: 8192,
            },
         },
      ],
   },
];