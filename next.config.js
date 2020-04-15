const path = require('path');
const webpack = require('webpack');
const withPWA = require('next-pwa');

module.exports = withPWA({
  webpack: config => {
    config.resolve.modules.push(path.resolve('./src/'))
    return config;
  },
  pwa: {
    dest: 'public'
  }
});