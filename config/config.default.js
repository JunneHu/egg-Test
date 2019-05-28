/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558320923978_475';

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // HTTP请求配置
  config.httpclient = {
    request: {
      timeout: 60 * 1000,
    },
  };

  // session配置
  config.session = {
    key: 'KEY_SESS',
    maxAge: 3600 * 1000,
    httpOnly: true,
    encrypt: true,
  };

  // add your middleware config here
  config.middleware = ['errorHandler'];
  config.errorHandler = {
    match: '/api',
  };
  // 日志配置
  config.logger = {
    level: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  // 静态资源地址
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/app/public'),
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };

  //上传配置
  config.multipart = {
    mode: 'file',
    autoFields: false,
    defaultCharset: 'utf8',
    fieldNameSize: 100,
    fieldSize: '100mb',
    fields: 10,
    fileSize: '100mb',
    files: 10,
    fileExtensions: [".jpg", ".png", ".doc", ".xls", ".pdf", ".docx", ".xlsx"],
  };

  // 模板
  config.view = {
    mapping: {
      '.html': 'arttemplate',
    },
  };
  // 数据库连接
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/eshow',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };
  // add your user config here
  const userConfig = {
    port: '7200/api-lgyzad-hotel-manage', //公共端口
    serverUrl: 'http://zuul233.hxdkfp.com', //公共接口
  };

  return {
    ...config,
    ...userConfig,
  };
};
