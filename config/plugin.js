'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  arttemplate: {
    enable: true,
    package: 'egg-view-arttemplate',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};
