const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const path = require('path');
const { resolve } = require('path');
const fs = require('fs');

const pwaWebpackConfig = require('@salesforce/pwa-kit-dev/configs/webpack/config');


const projectDir = process.cwd();
const findInProjectThenSDK = (pkg) => {
  const projectPath = resolve(projectDir,'..', '..', 'node_modules', pkg);
  return projectPath;
};

const newConfig = [...pwaWebpackConfig];

newConfig[0] = {
  ...newConfig[0],
  module: {
    ...newConfig[0].module,
    rules: [
      ...newConfig[0].module.rules,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: findInProjectThenSDK('style-loader'),
          },
          {
            loader: findInProjectThenSDK('css-loader'),
          },
        ],  
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: findInProjectThenSDK('url-loader'),
        }]
      }
    ],
   
  },
};

const projectPath1 = resolve(projectDir,'..', '..', 'node_modules', '@salesforce/pwa-kit-react-sdk');
const projectPath2 = resolve(projectDir,'..', '..', 'node_modules', 'webpack-hot-middleware');

newConfig[0].resolve.alias['@salesforce/pwa-kit-react-sdk'] = projectPath1;

newConfig[0].resolve.alias['webpack-hot-middleware'] = projectPath2;


Object.keys(newConfig[0].resolve.alias).forEach((item)=>{
  newConfig[0].resolve.alias[item] = resolve(projectDir,'..', '..', 'node_modules', item);
});


module.exports = [...newConfig];

